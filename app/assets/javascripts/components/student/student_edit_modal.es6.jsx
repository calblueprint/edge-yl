class StudentEditModal extends EditModal {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
      template: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    if (event.target === this._node) {
      StudentActions.storeTemplate(false);
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  storeAttribute(event) {
    StudentActions.storeAttribute(event.target.value);
  }

  updateStudent() {
    StudentActions.updateStudent(
      this.props.student.id,
      this.props.template
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    var template = this.props.template;
    return (
      <div style={this.styles.section}>
        <CardHeader
          action={() => this.updateStudent()}
          content={'Contact Information'}
          icon={TypeConstants.icons.save} />
        <div style={StyleConstants.cards.body}>
          <CardInput
            action={(event) => this.storeAttribute(event)}
            errors={template.errors.email}
            focus={true}
            label={template.key}
            margin={false}
            placeholder={'Email'}
            value={template.value} />
        </div>
      </div>
    );
  }
}
