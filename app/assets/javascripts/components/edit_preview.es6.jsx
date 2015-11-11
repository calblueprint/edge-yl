class EditPreview extends Component {

  static get defaultState() {
    return {
      birthday: '',
      firstName: '',
      lastName: '',
    };
  }

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
        width: '372px',
      },
      content: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: '1',
        padding: '12px',
      },
      head: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '40px',
        borderBottom: 'solid #D6D6D6 1px',
      },
      image: {
        width: '152px',
        height: '152px',
        marginBottom: '12px',
        borderRadius: '50%',
      },
    };
  }

  componentDidMount() {
    var student = this.props.student;
    this.setState({
      birthday: student.birthday,
      firstName: student.first_name,
      lastName: student.last_name,
    });
  }

  render() {
    var student = this.props.student;
    console.log(this.state);
    return (
      <div style={this.styles.container}>
        <div style={this.styles.head}>
          <h5>{'Student Preview'}</h5>
        </div>
        <div style={this.styles.content}>
          <img
            src='https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xfp1/t31.0-8/11856297_10200932572512494_2256826043885795533_o.jpg'
            style={this.styles.image} />
          <FormField
            title={'First Name'}
            placeholder={student.first_name}
            value={this.state.firstName} />
          <FormField
            title={'Last Name'}
            placeholder={student.last_name}
            value={this.state.lastName} />
          <FormField
            title={'Birthday'}
            placeholder={student.birthday}
            value={this.state.birthday} />
          </div>
      </div>
    );
  }
}
