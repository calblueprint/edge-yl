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
        flexWrap: 'wrap',
        justifyContent:'space-between',
        alignContent: 'flex-start',
        flex: '1',
        position: 'relative',
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
    return (
      this.props.students.map(this.renderCard.bind(this))
    );
  }

  render() {
    return (
      <div style={this.styles.container}>
        {this.renderCards()}
      </div>
    );
  }
}
