class ProfilePreview extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      profile: React.PropTypes.object.isRequired,
    }
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.containers.card,
        {
          alignItems: 'center',
          padding: '24px 0px',
          marginTop: '12px',
        }
      ),
      image: {
        width: '172px',
        borderRadius: '50%',
        marginTop: '4%',
      },
      name: {
        paddingTop: '24px',
      },
      position: {
        paddingTop: '12px',
        fontStyle: 'italic',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var profile = this.props.profile;
    return (
      <div style={this.styles.container}>
        <img
          src={'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xfp1/t31.0-8/11856297_10200932572512494_2256826043885795533_o.jpg'}
          style={this.styles.image} />
        <h2 style={this.styles.name}>{profile.full_name}</h2>
        <h5 style={this.styles.position}>
          {'Volunteer, Recruitment Group'}
        </h5>
      </div>
    );
  }
}

