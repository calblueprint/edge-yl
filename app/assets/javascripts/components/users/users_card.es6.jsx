class UsersCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      user: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.index,
      ),
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var user = this.props.user;
    return (
      <div style={this.styles.container}>
        <CardAttribute
          clickable={true}
          label={'Name'}
          route={RouteConstants.users.show(user.id)}
          type={'h4'}
          value={user.full_name} />
        <CardAttribute
          label={'Email'}
          value={user.email} />
      </div>
    );
  }
}

