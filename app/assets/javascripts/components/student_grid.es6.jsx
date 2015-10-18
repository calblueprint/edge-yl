class StudentGrid extends Component {

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
        flex: '1',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignContent: 'flex-start',
        position: 'relative',
        padding: '0 12px',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <StudentCard
          student={this.props.student}
          type={'preview'} />
        <StudentCard
          student={this.props.student}
          type={'contact'} />
        <StudentCard
          student={this.props.student}
          type={'parent'} />
      </div>
    );
  }
}
