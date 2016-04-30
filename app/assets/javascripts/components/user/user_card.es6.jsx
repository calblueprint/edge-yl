class UserCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool,
      media: React.PropTypes.string.isRequired,
      type: React.PropTypes.oneOf([
        TypeConstants.user.general,
      ]).isRequired,
      user: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    switch (this.props.type) {
      case TypeConstants.user.general:
        return (
          <UserGeneral
            editable={this.props.editable}
            user={this.props.user} />
        );
    };
  }

  renderTitle() {
    switch (this.props.type) {
      case TypeConstants.user.general:
        return 'General Information'
    };
  }
  render() {
    return (
      <div style={StyleConstants.cards.container(this.props.media)}>
        <CardHeader content={this.renderTitle()} />
        {this.renderBody()}
      </div>
    );
  }
}
