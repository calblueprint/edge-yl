class StudentGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      media: React.PropTypes.string.isRequired,
      student: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={StyleConstants.containers.grid}>
        <StudentCard
          editable={this.props.editable}
          media={this.props.media}
          student={this.props.student}
          target={TypeConstants.student.general} />
        <StudentCard
          editable={this.props.editable}
          media={this.props.media}
          student={this.props.student}
          target={TypeConstants.student.contact} />
        <StudentCard
          editable={this.props.editable}
          media={this.props.media}
          student={this.props.student}
          target={TypeConstants.student.emergency} />
        <StudentCard
          editable={this.props.editable}
          media={this.props.media}
          student={this.props.student}
          target={TypeConstants.student.conference} />
      </div>
    );
  }
}
