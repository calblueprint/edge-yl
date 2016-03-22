class ProspectCreateModal extends CreateModal {

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
      ProspectsActions.closeOverlay(false);
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  createProspect() {
    ProspectsActions.createProspect(this.props.template);
  }

  generateHandler(field) {
    return(event) => {
      ProspectsActions.storeAttribute(field, event.target.value);
    };
  }

  generateOptions() {
    return [
      {
        action: () => this.createProspect(),
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
          content={'New Prospect'}
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
            action={this.generateHandler('priority')}
            errors={template.errors.priority}
            label={'Priority'}
            margin={true}
            value={template.priority} />
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
          <CardInput
            action={this.generateHandler('contact_phone')}
            errors={template.errors.contact_phone}
            label={'Contact phone'}
            margin={true}
            value={template.contact_phone} />
        </div>
      </div>
    );
  }
}
