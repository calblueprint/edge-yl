class UsersGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      media: React.PropTypes.string.isRequired,
      users: React.PropTypes.array.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderCard(user) {
    return (
      <UsersCard
        key={user.id}
        media={this.props.media}
        user={user} />
    );
  }

  renderCards() {
    return this.props.users.map((user) => this.renderCard(user));
  }

  renderEmpty() {
    if (!this.props.users.length) {
      return (
        <GridEmpty
          content={'There are currently no users.'} />
      );
    }
  }

  render() {
    return (
      <div style={StyleConstants.grids.wrap}>
        {this.renderCards()}
        {this.renderEmpty()}
      </div>
    );
  }
}
