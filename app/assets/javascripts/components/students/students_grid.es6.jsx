class StudentsGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool,
      media: React.PropTypes.string.isRequired,
      students: React.PropTypes.array.isRequired,
    };
  }

  static get defaultProps() {
    return {
      editable: false,
    };
  }

  // -----------------------------w---------------------
  // Render
  // --------------------------------------------------
  renderCard(student) {
    return (
      <StudentsCard
        editable={this.props.editable}
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
      <div style={StyleConstants.grids.wrap}>
        {this.renderCards()}
      </div>
    );
  }
}
