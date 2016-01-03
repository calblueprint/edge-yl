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
  updateStudent() {
    StudentActions.updateStudent(
      this.props.student.id,
      this.props.template
    );
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
          label={template.key}
          margin={false}
          placeholder={'Email'}
          value={template.value} />
      );
    } else {
      var options = template.options.map((option) =>{
      return {
        action: () => StudentActions.storeAttribute(option),
        content: option.humanize(),
      }});
      return (
        <CardDropdown
          errors={template.errors[template.key]}
          label={template.key}
          margin={false}
          options={options}
          value={template.value} />
      );
    }
  }

  renderBody() {
    var template = this.props.template;
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
