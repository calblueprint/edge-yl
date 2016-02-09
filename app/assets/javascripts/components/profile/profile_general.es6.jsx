class ProfileGeneral extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      profile: React.PropTypes.object.isRequired,
    }
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      image: {
        width: '172px',
        borderRadius: '50%',
        marginTop: '4%',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var profile = this.props.profile;
    return (
      <div style={StyleConstants.cards.content}>
        <img
          src={'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xfp1/t31.0-8/11856297_10200932572512494_2256826043885795533_o.jpg'}
          style={this.styles.image} />
        <h2>{profile.full_name}</h2>
        <h5>{'Volunteer, Recruitment Group'}</h5>
      </div>
    );
  }
}

