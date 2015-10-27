class StudentParent extends Component {

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

  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
        padding: '12px',
      },
      heading: {
        fontSize: StyleConstants.fonts.sizes.small,
      },
    };
  }

  render() {
    var student = this.props.student;
    return (
      <div style={this.styles.container}>
        <h2 style={this.styles.heading}>{'Parent 1 ' + student.parent1_name + ', ' + student.parent1_type}</h2>
          {student.parent1_cell_number}
          {student.parent1_home_number}
          {student.parent1_address}
        <h2 style={this.styles.heading}>{'Parent 2 ' + student.parent2_name + ', ' + student.parent2_type}</h2>
          {student.parent1_cell_number}
          {student.parent1_home_number}
          {student.parent1_address}
      </div>
    );
  }
}
