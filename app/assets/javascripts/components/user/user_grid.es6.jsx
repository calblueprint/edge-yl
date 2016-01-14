class UserGrid extends Component {

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
    return (
      <div style={StyleConstants.containers.grid}>
        <UserCard
          editable={this.props.editable}
          media={this.props.media}
          user={this.props.user}
          type={TypeConstants.user.general} />
        <UserCard
          media={this.props.media}
          user={this.props.user}
          type={TypeConstants.user.leadership} />
      </div>
    );
  }
}
