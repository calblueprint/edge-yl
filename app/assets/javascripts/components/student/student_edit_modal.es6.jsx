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
      case TypeConstants.student.contact:
        return (
          <div style={this.styles.section}>
            <CardHeader
              action={() => this.updateStudent()}
              content={'Contact Information'}
              icon={TypeConstants.icons.save} />
            <StudentContactEdit template={this.props.template} />
          </div>
        );
      case TypeConstants.student.emergency:
        return (
          <div style={this.styles.section}>
            <CardHeader
              action={() => this.updateStudent()}
              content={'Emergency Information'}
              icon={TypeConstants.icons.save} />
            <StudentEmergencyEdit template={this.props.template} />
          </div>
        );
      case TypeConstants.student.general:
        return (
          <div style={this.styles.section}>
            <CardHeader
              action={() => this.updateStudent()}
              content={'General Information'}
              icon={TypeConstants.icons.save} />
            <StudentGeneralEdit template={this.props.template} />
          </div>
        );
      case TypeConstants.student.outreach:
        return (
          <div style={this.styles.section}>
            <CardHeader
              action={() => this.updateStudent()}
              content={'Outreach Information'}
              icon={TypeConstants.icons.save} />
            <StudentOutreachEdit template={this.props.template} />
          </div>
        );
    }
  }
}
