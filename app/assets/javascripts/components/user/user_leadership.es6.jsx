class UserLeadership extends UserCard {

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
  renderGroup() {
    var leadership = this.props.user.leadership;
    if (leadership) {
      if (leadership.group) {
        return (
          <CardAttribute
            label={'Group'}
            value={leadership.group.full_name} />
        );
      }
    }
  }

  renderLeadership() {
    var leadership = this.props.user.leadership;
    if (leadership) {
      return (
        <CardAttribute
          label={'Leadership Type'}
          value={leadership.style} />
      );
    }
  }

  render() {
    return (
      <div style={StyleConstants.cards.show(this.props.media)}>
        <CardHeader content={`Leadership Information`} />
        <div style={StyleConstants.cards.body}>
          {this.renderLeadership()}
          {this.renderGroup()}
        </div>
      </div>
    );
  }
}
