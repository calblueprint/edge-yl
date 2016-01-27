class StudentsGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.boolean.isRequired,
      media: React.PropTypes.string.isRequired,
      students: React.PropTypes.array.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderCard(student) {
    return (
      <StudentsCard
        key={student.id}
        media={this.props.media}
        student={student} />
    );
  }

  renderCards() {
    return this.props.students.map((student) => this.renderCard(student));
  }

  render() {
    return (
      <div style={StyleConstants.containers.grid}>
        {this.renderCards()}
      </div>
    );
  }
}
