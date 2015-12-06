class GroupGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      group: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      group: {},
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
        flex: '1',
        padding: '0px 12px',
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
    return this.props.group.students.map((student) => this.renderCard(student));
  }

  render() {
    return (
      <div style={this.styles.container}>
        {this.renderCards()}
      </div>
    );
  }
}
