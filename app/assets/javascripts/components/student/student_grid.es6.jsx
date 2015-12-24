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
      <div style={StyleConstants.containers.grid}>
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
          target={TypeConstants.student.general}
          type={TypeConstants.actions.edit} />
        <StudentCard
          media={this.props.media}
          student={student}
          target={TypeConstants.student.contact}
          type={TypeConstants.actions.edit} />
        <StudentCard
          media={this.props.media}
          student={student}
          target={TypeConstants.student.emergency}
          type={TypeConstants.actions.edit} />
        <StudentCard
          media={this.props.media}
          student={student}
          target={TypeConstants.student.conference}
          type={TypeConstants.actions.edit} />
      </div>
    );
  }
}
