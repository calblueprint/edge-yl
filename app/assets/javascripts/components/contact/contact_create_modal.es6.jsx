class ContactCreateModal extends CreateModal {

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
      SchoolActions.closeOverlay();
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  createContact() {
    SchoolActions.createContact(this.props.template);
  }

  generateHandler(field) {
    return(event) => {
      var value = event.target.value;
      SchoolActions.storeAttribute(field, value);
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    var template = this.props.template;
    var errors = template.errors;
    return (
      <div style={this.styles.section}>
        <CardHeader
          action={() => this.createContact()}
          content={'New Contact'}
          icon={TypeConstants.icons.save} />
        <div style={StyleConstants.cards.content}>
          <CardInput
            action={this.generateHandler('first_name')}
            errors={errors.first_name}
            focus={true}
            label={'First name'}
            value={template.first_name} />
          <CardInput
            action={this.generateHandler('last_name')}
            errors={errors.last_name}
            focus={true}
            label={'Last name'}
            value={template.last_name} />
          <CardInput
            action={this.generateHandler('email')}
            errors={errors.email}
            focus={true}
            label={'Email'}
            value={template.email} />
          <CardInput
            action={this.generateHandler('phone_number')}
            errors={errors.phone_number}
            focus={true}
            label={'Phone number'}
            value={template.phone_number} />
          <CardInput
            action={this.generateHandler('title')}
            errors={errors.title}
            focus={true}
            label={'Title'}
            value={template.title} />
        </div>
      </div>
    );
  }
}
