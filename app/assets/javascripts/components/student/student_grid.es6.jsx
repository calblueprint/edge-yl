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
  // Render
  // --------------------------------------------------
  render() {
    var student = this.props.student;
    return (
      <div style={StyleConstants.containers.grid}>
        <StudentCard
          media={this.props.media}
          student={student}
          target={TypeConstants.student.general} />
        <StudentCard
          media={this.props.media}
          student={student}
          target={TypeConstants.student.contact} />
        <StudentCard
          media={this.props.media}
          student={student}
          target={TypeConstants.student.emergency} />
        <StudentCard
          media={this.props.media}
          student={student}
          target={TypeConstants.student.conference} />
      </div>
    );
  }
}
