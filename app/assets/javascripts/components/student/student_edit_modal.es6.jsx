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

  static get defaultProps() {
    return {
      overlay: {
        active: false,
        target: TypeConstants.overlay.target.preview,
        type: TypeConstants.overlay.type.edit,
      },
      student: {},
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
      case TypeConstants.overlay.preview:
        return <StudentPreviewEdit student={this.props.student} />;
      case TypeConstants.overlay.contact:
        return <StudentContactEdit student={this.props.student} />;
      case TypeConstants.overlay.guardian:
        return <StudentGuardianEdit student={this.props.student} />;
    }
  }
}
