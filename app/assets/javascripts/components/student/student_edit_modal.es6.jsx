class StudentEditModal extends EditModal {

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
      StudentActions.closeOverlay();
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  updateStudent() {
    StudentActions.updateStudent(this.props.template);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderChild() {
    var template = this.props.template;
    if (template.type === 'input') {
      return (
        <CardInput
          action={(event) => StudentActions.storeAttribute(event.target.value)}
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
          options={choices}
          value={Helpers.humanize(template.value)} />
      );
    }
  }

  renderBody() {
    return (
      <div style={this.styles.section}>
        <CardHeader
          action={() => this.updateStudent()}
          content={'Contact Information'}
          icon={TypeConstants.icons.save} />
        <div style={StyleConstants.cards.body}>
          {this.renderChild()}
        </div>
      </div>
    );
  }
}
