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
    user = this.props.user;
    return (
      <div style={StyleConstants.grids.wrap}>
        <UserCard
          editable={this.props.editable}
          media={this.props.media}
          type={TypeConstants.user.general}
          user={user} />
        <GridHeader
          title={'Responsibilities'} />
        <ResponsibilitiesGrid
          editable={this.props.editable}
          media={this.props.media}
          responsibilities={user.responsibilities}
          type={TypeConstants.pages.user} />
      </div>
    );
  }
}
