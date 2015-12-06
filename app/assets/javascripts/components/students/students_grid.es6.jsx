class StudentsGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      students: React.PropTypes.array.isRequired,
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
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
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
