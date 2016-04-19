class ProfileGeneral extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      profile: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  storePairing(key) {
    var profile = this.props.profile;
    ProfileActions.storePairing({
      id: profile.id,
      key: key,
      type: 'input',
      value: profile[key],
    });
  }

  storeTemplate(key) {
    var profile = this.props.profile;
    ProfileActions.storeTemplate(
      {
        attributes: {},
        errors: {},
        id: profile.id,
        key: key,
        type: TypeConstants.models.profile,
      }
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var profile = this.props.profile;
    return (
      <div style={StyleConstants.cards.content}>
        <CardAttribute
          action={() => this.storePairing('first_name')}
          editable={this.props.editable}
          label={'First name'}
          value={profile.first_name} />
        <CardAttribute
          action={() => this.storePairing('last_name')}
          editable={this.props.editable}
          label={'Last name'}
          value={profile.last_name} />
        <CardAttribute
          action={() => this.storePairing('email')}
          editable={this.props.editable}
          humanize={false}
          label={'Email'}
          value={profile.email} />
        <CardAttribute
          action={() => this.storeTemplate(TypeConstants.profile.password)}
          editable={this.props.editable}
          humanize={false}
          label={'Password'}
          value={'********'} />
      </div>
    );
  }
}
