class StudentsGrid extends Component {

  static get propTypes() {
    return {
      students: React.PropTypes.array.isRequired,
    };
  }

  static get defaultProps() {
    return {
      students: [],
    };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'wrap',
        justifyContent: 'space-between',
        alignContent: 'flex-start',
      },
    };
  }

  renderCard(student) {
    return (
      <StudentsCard
        key={student.id}
        student={student} />
    );
  }

  renderCards() {
    return this.props.students.map((student) => this.renderCard(student));
  }

  render() {
    return (
      <div style={this.styles.container}>
        {this.renderCards()}
      </div>
    );
  }
}
