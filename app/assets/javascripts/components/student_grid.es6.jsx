class StudentGrid extends Component {

  static get propTypes() {
    return {
      student: React.PropTypes.shape.isRequired,
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
          cardName={'Card Name'}
          cardBody={'profile card body text'}
          student={this.props.student} />
        <StudentCard
          cardName={'Card Name'}
          cardBody={'profile card body text'}/>
        <StudentCard
          cardName={'Card Name'}
          cardBody={'profile card body text'}/>
      </div>
    );
  }
}
