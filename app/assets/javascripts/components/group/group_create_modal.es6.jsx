class GroupCreateModal extends CreateModal {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
      groupables: React.PropTypes.arrayOf(React.PropTypes.object),
      template: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      groupables: [],
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    if (event.target === this._node) {
      ConferenceActions.closeOverlay();
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  createGroup() {
    ConferenceActions.createGroup(this.props.template);
  }

  generateChoice(groupable, type) {
    return {
      action: () => ConferenceActions.storeAttribute(
        type === 'primary' ? 'primary_leader' : 'secondary_leader',
        {
          style: type === 'primary' ? 1 : 0,
          user_id: groupable.id,
        },
      ),
      content: Helpers.humanize(groupable.full_name),
    };
  }

  generateChoices(type) {
    var groupables = this.props.groupables;
    return groupables.map((groupable) => this.generateChoice(groupable, type));
  }

  generateHandler(field) {
    return(event) => {
      ConferenceActions.storeAttribute(field, event.target.value);
    };
  }

  generateValue(type) {
    var groupables = this.props.groupables;
    var attributes = this.props.template.attributes;
    if (type === 'primary' && attributes['primary_leader']) {
      var id = attributes['primary_leader']['user_id'];
      var user = groupables.find((groupable) => groupable.id == id);
      return user.full_name;
    } else if (type === 'secondary' && attributes['secondary_leader']) {
      var id = attributes['secondary_leader']['user_id'];
      var user = groupables.find((groupable) => groupable.id == id);
      return user.full_name;
    }
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    var errors = this.props.template.errors;
    return (
      <div style={this.styles.section}>
        <CardHeader
          action={() => this.createGroup()}
          content={'New Group'}
          icon={TypeConstants.icons.save} />
        <div style={StyleConstants.cards.content}>
          <CardInput
            action={this.generateHandler('letter')}
            errors={errors.letter}
            focus={true}
            label={'Group Letter'}
            placeholder={'A'}
            value={''} />
          <CardDropdown
            action={this.generateHandler('letter')}
            choices={this.generateChoices('primary')}
            errors={errors['leaderships_attributes']}
            label={'Primary Leader'}
            margin={true}
            value={this.generateValue('primary')} />
          <CardDropdown
            errors={errors['leaderships_attributes']}
            choices={this.generateChoices('secondary')}
            label={'Secondary Leader'}
            margin={true}
            value={this.generateValue('secondary')} />
        </div>
      </div>
    );
  }
}
