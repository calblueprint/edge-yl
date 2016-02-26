class ProfileEditModal extends EditModal {

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
  updateProfile() {
    ProfileActions.updateProfile(this.props.template);
  }

  generateOptions() {
    return [
      {
        action: () => this.updateProfile(),
        icon: TypeConstants.icons.save,
      },
    ];
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderChild() {
    var template = this.props.template;
    if (template.type === 'input') {
      return (
        <CardInput
          action={(event) => ProfileActions.storeAttribute(event.target.value)}
          errors={template.errors[template.key]}
          focus={true}
          label={Helpers.humanize(template.key)}
          type={template.key === 'birthday' ? 'date' : 'text'}
          value={template.value} />
      );
    } else {
      var choices = template.choices.map((choice) =>{
      return {
        action: () => ProfileActions.storeAttribute(choice),
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
          content={'Profile Preview'}
          options={this.generateOptions()} />
        <div style={StyleConstants.cards.content}>
          {this.renderChild()}
        </div>
      </div>
    );
  }
}
