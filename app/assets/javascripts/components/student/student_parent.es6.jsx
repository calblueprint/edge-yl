class StudentParent extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      student: {},
    };
  }

  // --------------------------------------------------
  // State
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
        padding: '12px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var student = this.props.student;
    return (
      <div style={this.styles.container}>
        <h4>{'Parent 1'}</h4>
        <h6>{`${student.parent1_name}, ${student.parent1_type}`}</h6>
        <h6>{student.parent1_cell_number}</h6>
        <h6>{student.parent1_home_number}</h6>
        <h6>{student.parent1_address}</h6>
        <br/>
        <h4>{'Parent 2'}</h4>
        <h6>{`${student.parent2_name}, ${student.parent2_type}`}</h6>
        <h6>{student.parent1_cell_number}</h6>
        <h6>{student.parent1_home_number}</h6>
        <h6>{student.parent1_address}</h6>
      </div>
    );
  }
}
