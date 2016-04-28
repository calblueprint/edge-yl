class VolunteerCreateModal extends CreateModal {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      template: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    if (event.target === this._node) {
      VolunteersActions.closeOverlay(false);
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  createVolunteer() {
    VolunteersActions.createVolunteer(this.props.template);
  }

  generateHandler(field) {
    return(event) => {
      VolunteersActions.storeAttribute(field, event.target.value);
    };
  }

  generateOptions() {
    return [
      {
        action: () => this.createVolunteer(),
        icon: TypeConstants.icons.save,
      },
    ];
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    var template = this.props.template;
    return (
      <div style={this.styles.section}>
        <CardHeader
          content={'New Volunteer'}
          options={this.generateOptions()} />
        <div style={StyleConstants.cards.content}>
          <CardInput
            action={this.generateHandler('first_name')}
            errors={template.errors.first_name}
            focus={true}
            label={'First name'}
            value={template.name} />
          <CardInput
            action={this.generateHandler('last_name')}
            errors={template.errors.last_name}
            label={'Last name'}
            margin={true}
            value={template.last_name} />
          <CardInput
            action={this.generateHandler('email')}
            errors={template.errors.email}
            label={'Email'}
            margin={true}
            value={template.email} />
        </div>
      </div>
    );
  }
}
