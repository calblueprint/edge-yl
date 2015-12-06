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
  // Render
  // --------------------------------------------------
  renderBody() {
    switch (this.props.overlay.target) {
      case TypeConstants.overlay.target.preview:
        return <StudentPreviewEdit student={this.props.student} />;
      case TypeConstants.overlay.target.contact:
        return <StudentContactEdit student={this.props.student} />;
      case TypeConstants.overlay.target.guardian:
        return <StudentGuardianEdit student={this.props.student} />;
    }
  }
}
