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
      <div style={StyleConstants.grids.wrap}>
        <UserCard
          editable={this.props.editable}
          media={this.props.media}
          type={TypeConstants.user.general}
          user={this.props.user} />
        <UserCard
          media={this.props.media}
          type={TypeConstants.user.leadership}
          user={this.props.user} />
      </div>
    );
  }
}
