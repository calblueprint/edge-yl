class ProfilePasswordEditModal extends EditModal {

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
      ProfileActions.closeOverlay();
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  updatePassword() {
    ProfileActions.updatePassword(this.props.template);
  }

  generateHandler(field) {
    return (event) => {
      ProfileActions.storeAttribute(
        {
          key: field,
          value: event.target.value,
        });
    };
  }

  generateOptions() {
    return [
      {
        action: () => this.updatePassword(this.props.template),
        icon: TypeConstants.icons.save,
      },
    ];
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderChild() {
    var template = this.props.template
    var attributes = template.attributes;
    var errors = template.errors;
    return (
      <div style={StyleConstants.cards.content}>
        <CardInput
          action={this.generateHandler('current_password')}
          errors={errors.current_password}
          focus={true}
          label={'Old Password'}
          type={'password'} />
        <CardInput
          action={this.generateHandler('password')}
          errors={errors.password}
          label={'New Password'}
          type={'password'} />
        <CardInput
          action={this.generateHandler('password_confirmation')}
          errors={errors.password_confirmation}
          label={'Password Confirmation'}
          type={'password'} />
      </div>
    );
  }

  renderBody() {
    return (
      <div style={this.styles.section}>
        <CardHeader
          content={'Update Password'}
          options={this.generateOptions()} />
        {this.renderChild()}
      </div>
    );
  }
}
