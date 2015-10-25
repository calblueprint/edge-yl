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
        fontSize: '16px',
      },
    };
  }

  render() {
    var student = this.props.student;
    return (
      <div style={this.styles.container}>
        <h2 style={this.styles.heading}>{'Parent 1'}</h2>
        <h2 style={this.styles.heading}>{'Parent 2'}</h2>
      </div>
    );
  }
}
