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
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          display: 'flex',
          flexFlow: 'column',
          justifyContent: 'center',
          width: '356px',
        }
      ),
      form: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '12px',
        marginBottom: '18px',
      },
      image: {
        width: '152px',
        height: '152px',
        marginTop: '18px',
        borderRadius: '50%',
      },
    };
  }

  componentWillMount() {
    this.setState({
      birthday: this.props.student.birthday,
      firstName: this.props.student.first_name,
      lastName: this.props.student.last_name,
    });
  }

  updateStudent() {
    console.log('Should send a request up here!');
  }

  generateHandler(field) {
    var state = {};
    return(event) => {
      state[field] = event.target.value;
      this.setState(state);
    };
  }

  render() {
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
          <CardInput
            action={this.generateHandler('firstName')}
            placeholder={'First name'}
            value={this.state.firstName} />
          <CardInput
            action={this.generateHandler('lastName')}
            placeholder={'Last name'}
            value={this.state.lastName} />
          <CardInput
            action={this.generateHandler('birthday')}
            placeholder={'Birthday'}
            value={this.state.birthday} />
        </div>
      </div>
    );
  }
}
