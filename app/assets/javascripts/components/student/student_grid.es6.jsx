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
        flexFlow: 'wrap',
        justifyContent: 'space-between',
        alignContent: 'flex-start',
        flex: '1',
        padding: '0px 12px',
      },
    };
  }

  render() {
    console.log(this.props.student);
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
