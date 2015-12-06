class StudentEditModal extends EditModal {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      overlay: React.PropTypes.shape({
        active: React.PropTypes.bool.isRequired,
        target: React.PropTypes.string.isRequired,
        type: React.PropTypes.string.isRequired,
      }).isRequired,
      student: React.PropTypes.object.isRequired,
      template: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    if (event.target === this._node) {
      StudentActions.storeOverlay(false);
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  updateStudent() {
    StudentActions.updateStudent(
      this.props.student,
      this.props.template
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    switch (this.props.overlay.target) {
      case TypeConstants.overlay.target.preview:
        return (
          <div style={this.styles.section}>
            <CardHeader
              action={() => this.updateStudent()}
              content={'Student Preview'}
              icon={TypeConstants.icons.save} />
            <StudentPreviewEdit
              student={this.props.student}
              template={this.props.template} />
          </div>
        );
      case TypeConstants.overlay.target.contact:
        return (
          <StudentContactEdit student={this.props.student} />
        );
      case TypeConstants.overlay.target.guardian:
        return <StudentGuardianEdit student={this.props.student} />;
      case TypeConstants.overlay.target.outreach:
        return <StudentOutreachEdit student={this.props.student} />;
    }
  }
}
