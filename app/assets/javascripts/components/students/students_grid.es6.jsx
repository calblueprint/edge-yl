class StudentsGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool,
      media: React.PropTypes.string.isRequired,
      students: React.PropTypes.array.isRequired,
      type: React.PropTypes.oneOf([
        TypeConstants.students.default,
        TypeConstants.students.group,
        TypeConstants.students.room,
      ]).isRequired,
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
        student={student}
        type={this.props.type} />
    );
  }

  renderCards() {
    return this.props.students.map((student) => this.renderCard(student));
  }

  renderEmpty() {
    if (!this.props.students.length) {
      return (
        <GridEmpty
          content={'There are currently no students.'} />
      );
    }
  }

  render() {
    return (
      <div style={StyleConstants.grids.wrap}>
        {this.renderCards()}
        {this.renderEmpty()}
      </div>
    );
  }
}
