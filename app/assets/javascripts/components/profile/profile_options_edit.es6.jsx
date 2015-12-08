class ProfileOptionsEdit extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      profile: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
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

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState({
      birthday: this.props.profile.birthday,
      firstName: this.props.profile.first_name,
      lastName: this.props.profile.last_name,
    });
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateHandler(field) {
    var state = {};
    return(event) => {
      state[field] = event.target.value;
      this.setState(state);
    };
  }

  updateProfile() {
    var params = {
      user: {
        birthday: this.state.birthday,
        first_name: this.state.firstName,
        last_name: this.state.lastName,
      },
    };
    ProfileActions.updateProfile(this.props.profile.id, params);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var profile = this.props.profile;
    return (
      <div style={this.styles.container}>
        <CardHeader
          action={(event) => this.updateProfile()}
          content={'Profile'}
          icon={TypeConstants.icons.save} />
        <div style={this.styles.form}>
          <img
            src={'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xfp1/t31.0-8/11856297_10200932572512494_2256826043885795533_o.jpg'}
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
