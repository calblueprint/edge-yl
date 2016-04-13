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
        TypeConstants.students.school,
      ]).isRequired,
      typeId: React.PropTypes.number.isRequired,
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
        type={this.props.type}
        typeId={this.props.typeId} />
    );
  }

  renderCards() {
    return this.props.students.map((student) => this.renderCard(student));
  }

  renderEmpty() {
    var type;
    switch (this.props.type) {
      case TypeConstants.students.group:
        type = 'group';
        break;
      case TypeConstants.students.room:
        type = 'room';
        break;
      case TypeConstants.students.school:
        type = 'school';
        break;
      default:
        type = 'conference';
        break;
    }
    if (!this.props.students.length) {
      return (
        <GridEmpty
          content={`There are currently no students in this ${type}.`} />
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
