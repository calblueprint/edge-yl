class ProfileOptions extends Component {

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
  storeTemplate(key, choices) {
    var profile = this.props.profile;
    ProfileActions.storeTemplate({
      choices: choices,
      id: profile.id,
      key: key,
      model: 'profile',
      type: choices ? 'dropdown' : 'input',
      value: profile[key],
    });
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var profile = this.props.profile;
    return (
      <div style={StyleConstants.cards.body}>
        <CardAttribute
          action={() => this.storeTemplate('first_name')}
          editable={this.props.editable}
          label={'First name'}
          value={profile.first_name} />
        <CardAttribute
          action={() => this.storeTemplate('last_name')}
          editable={this.props.editable}
          label={'Last name'}
          value={profile.last_name} />
        <CardAttribute
          action={() => this.storeTemplate('email')}
          editable={this.props.editable}
          label={'Email'}
          value={profile.email} />
        <CardAttribute
          label={'Password'}
          value={'**********'} />
      </div>
    );
  }
}
