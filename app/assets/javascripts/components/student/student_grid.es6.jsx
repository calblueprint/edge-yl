class StudentGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      media: React.PropTypes.string.isRequired,
      student: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'wrap',
        justifyContent: 'space-between',
        alignContent: 'flex-start',
        flex: '1',
        padding: '0px 12px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.container}>
        <StudentCard
          media={this.props.media}
          student={this.props.student}
          target={TypeConstants.overlay.target.preview}
          type={TypeConstants.overlay.type.edit} />
        <StudentCard
          media={this.props.media}
          student={this.props.student}
          target={TypeConstants.overlay.target.contact}
          type={TypeConstants.overlay.type.edit} />
        <StudentCard
          media={this.props.media}
          student={this.props.student}
          target={TypeConstants.overlay.target.guardian}
          type={TypeConstants.overlay.type.edit} />
        <StudentCard
          media={this.props.media}
          student={this.props.student}
          target={TypeConstants.overlay.target.conference}
          type={TypeConstants.overlay.type.edit} />
        <StudentCard
          media={this.props.media}
          student={this.props.student}
          target={TypeConstants.overlay.target.outreach}
          type={TypeConstants.overlay.type.edit} />
      </div>
    );
  }
}
