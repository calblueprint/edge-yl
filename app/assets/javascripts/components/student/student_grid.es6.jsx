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
      },
      header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: '12px',
      },
      section: {
        display: 'flex',
        flexFlow: 'column',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var student = this.props.student;
    return (
      <div style={this.styles.container}>
        <div style={this.styles.header}>
          <div style={this.styles.section}>
            <h4>{'Student'}</h4>
            <h3>{`${student.first_name} ${student.last_name}`}</h3>
          </div>
          <Clickable
            action={() => this.showOverlay()}
            content={'Edit'}
            type={'h3'} />
        </div>
        <StudentCard
          media={this.props.media}
          student={student}
          target={TypeConstants.overlay.target.preview}
          type={TypeConstants.overlay.type.edit} />
        <StudentCard
          media={this.props.media}
          student={student}
          target={TypeConstants.overlay.target.contact}
          type={TypeConstants.overlay.type.edit} />
        <StudentCard
          media={this.props.media}
          student={student}
          target={TypeConstants.overlay.target.guardian}
          type={TypeConstants.overlay.type.edit} />
        <StudentCard
          media={this.props.media}
          student={student}
          target={TypeConstants.overlay.target.conference}
          type={TypeConstants.overlay.type.edit} />
      </div>
    );
  }
}
