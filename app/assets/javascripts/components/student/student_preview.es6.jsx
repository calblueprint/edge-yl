class StudentPreview extends Component {

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
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: '1',
        padding: '12px',
      },
      image: {
        width: '152px',
        height: '152px',
        marginBottom: '12px',
        borderRadius: '50%',
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
        <img
          src={'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xfp1/t31.0-8/11856297_10200932572512494_2256826043885795533_o.jpg'}
          style={this.styles.image} />
        <h4>{`${student.first_name} ${student.last_name}`}</h4>
        <h5>{student.birthday}</h5>
      </div>
    );
  }
}
