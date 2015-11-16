class UsersGrid extends Component {

  static get propTypes() {
    return {
      users: React.PropTypes.array.isRequired,
    };
  }

  static get defaultProps() {
    return {
      users: [],
    };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'wrap',
        justifyContent: 'space-between',
        alignContent: 'flex-start',
        flex: '1',
      },
    };
  }

  renderCard(user) {
    return (
      <UsersCard
        key={user.id}
        user={user} />
    );
  }

  renderCards() {
    return this.props.users.map((user) => this.renderCard(user));
  }

  render() {
    return (
      <div style={this.styles.container}>
        {this.renderCards()}
      </div>
    );
  }
}
