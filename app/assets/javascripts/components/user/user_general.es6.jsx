class UserGeneral extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      user: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  storeTemplate(key, choices) {
    var user = this.props.user;
    UserActions.storeTemplate({
      choices: choices,
      id: user.id,
      key: key,
      model: TypeConstants.models.user,
      type: choices ? 'dropdown' : 'input',
      value: user[key],
    });
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var user = this.props.user;
    return (
      <div style={StyleConstants.cards.content}>
        <CardAttribute
          action={() => this.storeTemplate('first_name')}
          editable={this.props.editable}
          label={'First name'}
          value={user.first_name} />
        <CardAttribute
          action={() => this.storeTemplate('last_name')}
          editable={this.props.editable}
          label={'Last name'}
          value={user.last_name} />
        <CardAttribute
          action={() => this.storeTemplate('email')}
          editable={this.props.editable}
          label={'Email'}
          value={user.email} />
      </div>
    );
  }
}
