class StudentCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      media: React.PropTypes.string.isRequired,
      student: React.PropTypes.object.isRequired,
      target: React.PropTypes.oneOf([
        TypeConstants.student.contact,
        TypeConstants.student.conference,
        TypeConstants.student.emergency,
        TypeConstants.student.general,
        TypeConstants.student.outreach,
      ]).isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.show,
        this.props.media === 'big' && { width: '49%' },
        this.props.media === 'small' && { width: '100%' }
      ),
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  showOverlay() {
    StudentActions.storeOverlay(
      true,
      TypeConstants.actions.edit,
      this.props.target
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    switch (this.props.target) {
      case TypeConstants.student.conference:
        return <StudentConference student={this.props.student} />;
      case TypeConstants.student.contact:
        return <StudentContact student={this.props.student} />;
      case TypeConstants.student.emergency:
        return <StudentEmergency student={this.props.student} />;
      case TypeConstants.student.general:
        return <StudentGeneral student={this.props.student} />;
    };
  }

  renderTitle() {
    switch (this.props.target) {
      case TypeConstants.student.contact:
        return 'Contact Information';
      case TypeConstants.student.conference:
        return 'Conference Information';
      case TypeConstants.student.emergency:
        return 'Emergency Information';
      case TypeConstants.student.general:
        return 'General Information';
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <CardHeader
          action={() => this.showOverlay()}
          content={this.renderTitle()}
          icon={TypeConstants.icons.edit} />
        {this.renderBody()}
      </div>
    );
  }
}
