class GroupCreateModal extends CreateModal {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
      groupables: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
      template: React.PropTypes.object.isRequired,
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
  /** Returns a groupable object (leadership candidate) by their id, this is needed
   * because template does not store their full name.
   */
  findGroupable(groupable_id) {
    return this.props.groupables.filter((groupable) => groupable.id == groupable_id).pop();
  }

  generateChoice(groupable, leader) {
    var primary = 0;
    var secondary = 1;
    switch(leader) {
      case 'primary':
        return {
          action: () => ConferenceActions.storeListAttribute(
            'leaderships_attributes',
            primary,
            { user_id: groupable.id }
          ),
          content: Helpers.humanize(groupable.full_name),
        };
      case 'secondary':
        return {
          action: () => ConferenceActions.storeListAttribute(
            'leaderships_attributes',
            secondary,
            { user_id: groupable.id, style: secondary }
          ),
          content: Helpers.humanize(groupable.full_name),
        };
    }
  }

  generateChoices(leader) {
    return this.props.groupables.map((groupable) => this.generateChoice(groupable, leader));
  }

  createGroup() {
    ConferenceActions.createGroup(this.props.template);
  }

  generateHandler(field) {
    return(event) => {
      ConferenceActions.storeAttribute(field, event.target.value);
    };
  }

  renderBody() {
    var attributes = this.props.template.attributes;
    var errors = this.props.template.errors;
    var leaders = attributes['leaderships_attributes'];
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
            value={leaders
                   && leaders[0]
                   && this.findGroupable(leaders[0]['user_id']).full_name} />
          <CardDropdown
            errors={errors['leaderships_attributes']}
            choices={this.generateChoices('secondary')}
            label={'Secondary Leader'}
            margin={true}
            value={leaders
                   && leaders[1]
                   && this.findGroupable(leaders[1]['user_id']).full_name} />
        </div>
      </div>
    );
  }
}
