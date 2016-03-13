class PartialSchoolCreateModal extends CreateModal {

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
      PartialSchoolsActions.closeOverlay(false);
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  createPartialSchool() {
    PartialSchoolsActions.createPartialSchool(this.props.template);
  }

  generateHandler(field) {
    return(event) => {
      PartialSchoolsActions.storeAttribute(field, event.target.value);
    };
  }

  generateOptions() {
    return [
      {
        action: () => this.createPartialSchool(),
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
          content={'New Partial School'}
          options={this.generateOptions()} />
        <div style={StyleConstants.cards.content}>
          <CardInput
            action={this.generateHandler('name')}
            errors={template.errors.name}
            focus={true}
            label={'Name'}
            value={template.name} />
          <CardInput
            action={this.generateHandler('website')}
            errors={template.errors.website}
            label={'Website'}
            margin={true}
            value={template.website} />
          <CardInput
            action={this.generateHandler('contact_first_name')}
            errors={template.errors.contact_first_name}
            label={'Contact first name'}
            margin={true}
            value={template.contact_first_name} />
          <CardInput
            action={this.generateHandler('contact_last_name')}
            errors={template.errors.contact_last_name}
            label={'Contact last name'}
            margin={true}
            value={template.contact_last_name} />
          <CardInput
            action={this.generateHandler('contact_email')}
            errors={template.errors.contact_email}
            label={'Contact email'}
            margin={true}
            value={template.contact_email} />
        </div>
      </div>
    );
  }
}
