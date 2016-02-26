class UserEditModal extends EditModal {

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
      UserActions.closeOverlay();
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateOptions() {
    return [
      {
        action: () => this.updateUser(),
        icon: TypeConstants.icons.save,
      },
    ];
  }

  updateUser() {
    UserActions.updateUser(this.props.template);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderChild() {
    var template = this.props.template;
    if (template.type === 'input') {
      return (
        <CardInput
          action={(event) => UserActions.storeAttribute(event.target.value)}
          errors={template.errors[template.key]}
          focus={true}
          label={Helpers.humanize(template.key)}
          type={template.key === 'birthday' ? 'date' : 'text'}
          value={template.value} />
      );
    } else {
      var choices = template.choices.map((choice) =>{
      return {
        action: () => StudentActions.storeAttribute(choice),
        content: Helpers.humanize(choice),
      }});
      return (
        <CardDropdown
          errors={template.errors[template.key]}
          label={template.key}
          choices={choices}
          value={Helpers.humanize(template.value)} />
      );
    }
  }

  renderBody() {
    return (
      <div style={this.styles.section}>
        <CardHeader
          content={'Contact Information'}
          options={this.generateOptions() />
        <div style={StyleConstants.cards.content}>
          {this.renderChild()}
        </div>
      </div>
    );
  }
}
