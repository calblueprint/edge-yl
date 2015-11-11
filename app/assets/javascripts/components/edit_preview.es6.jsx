class EditPreview extends Component {

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
        width: '356px',
      },
      form: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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

  componentDidMount() {
    this.setState({
      birthday: this.props.student.birthday,
      firstName: this.props.student.first_name,
      lastName: this.props.student.last_name,
    });
  }

  updateStudent() {
    console.log('hello');
  }

  generateHandler(field) {
    var state = {};
    return(event) => {
      state[field] = event.target.value;
      this.setState(state);
    };
  }

  render() {
    console.log(this.state);
    var student = this.props.student;
    return (
      <div style={this.styles.container}>
        <CardHeader
          action={(event) => this.updateStudent()}
          content={'Student Preview'}
          icon={'fa fa-save fa-lg'} />
        <div style={this.styles.form}>
          <img
            src='https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xfp1/t31.0-8/11856297_10200932572512494_2256826043885795533_o.jpg'
            style={this.styles.image} />
          <FormField
            title={'First Name'}
            updateValue={this.generateHandler('firstName')}
            value={this.state.firstName} />
          <FormField
            title={'Last Name'}
            updateValue={this.generateHandler('lastName')}
            value={this.state.lastName} />
          <FormField
            title={'Birthday'}
            value={this.state.birthday} />
          </div>
      </div>
    );
  }
}
