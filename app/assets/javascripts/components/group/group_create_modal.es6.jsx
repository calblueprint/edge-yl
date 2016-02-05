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

  generateChoice(groupable, index) {
    return {
      action: () => ConferenceActions.storeListAttribute(
        'leaderships_attributes',
        { user_id: groupable.id },
        index,
      ),
      content: Helpers.humanize(groupable.full_name),
    };
  }

  generateChoices() {
    var groupables = this.props.groupables;
    return groupables.map((groupable, index) => this.generateChoice(groupable, index));
  }

  generateHandler(field) {
    return(event) => {
      ConferenceActions.storeAttribute(field, event.target.value);
    };
  }

  generateValue(type) {
    var groupables = this.props.groupables;
    var leaderships = this.props.template.attributes['leaderships_attributes'];
    if (type === 'primary' && leaderships[0]) {
      var id = leaderships[0]['user_id'];
      var user = groupables.find((groupable) => groupable.id == id);
      return user.full_name;
    } else if (type === 'secondary' && leaderships[1]) {
      var id = leaderships[1]['user_id'];
      var user = groupables.find((groupable) => groupable.id == id);
      return user.full_name
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
        <div style={StyleConstants.cards.body}>
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
