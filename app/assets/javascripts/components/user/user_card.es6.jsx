class UserCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      media: React.PropTypes.string.isRequired,
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
      model: 'user',
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
      <div style={StyleConstants.containers.grid}>
        <UserGeneral
          editable={this.props.editable}
          media={this.props.media}
          user={this.props.user} />
        <UserLeadership
          media={this.props.media}
          user={this.props.user} />
      </div>
    );
  }
}
