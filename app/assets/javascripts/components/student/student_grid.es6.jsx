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
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignContent: 'flex-start',
        flex: '1',
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
        <StudentCard
          student={this.props.student}
          type={'conference'} />
      </div>
    );
  }
}
