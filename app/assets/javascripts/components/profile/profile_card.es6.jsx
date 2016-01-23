class ProfileCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      media: React.PropTypes.string.isRequired,
      profile: React.PropTypes.object.isRequired,
      type: React.PropTypes.oneOf([
        TypeConstants.profile.credentials,
        TypeConstants.profile.general,
      ]).isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    switch (this.props.type) {
      case TypeConstants.profile.credentials:
        return (
          <ProfileOptions
            editable={this.props.editable}
            profile={this.props.profile} />
        );
      case TypeConstants.profile.general:
        return (
          <ProfilePreview
            editable={this.props.editable}
            profile={this.props.profile} />
        );
    };
  }

  renderTitle() {
    switch (this.props.type) {
      case TypeConstants.student.credentials:
        return 'Profile Credentials';
      case TypeConstants.student.general:
        return 'Profile General';
    };
  }

  render() {
    return (
      <div style={StyleConstants.cards.show(this.props.media)}>
        <CardHeader content={this.renderTitle()} />
        {this.renderBody()}
      </div>
    );
  }
}
