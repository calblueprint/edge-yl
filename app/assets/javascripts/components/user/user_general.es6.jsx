class UserGeneral extends UserCard {

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
  // Render
  // --------------------------------------------------
  render() {
    var user = this.props.user;
    return (
      <div style={StyleConstants.cards.show(this.props.media)}>
        <CardHeader content={`General Information`} />
        <div style={StyleConstants.cards.body}>
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
      </div>
    );
  }
}
