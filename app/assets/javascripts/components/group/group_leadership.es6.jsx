class GroupLeadership extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      group: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
    storePairing(id, value) {
    GroupActions.storePairing({
      id: this.props.group.id,
      key: 'user',
      model: 'leadership',
      type: 'dropdown',
      value: value,
    });
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderLeadership(leadership) {
    var user = leadership.user;
    if (user) {
      return (
        <CardAttribute
          action={() => this.storePairing(leadership.id, user)}
          clickable={true}
          editable={this.props.editable}
          key={leadership.id}
          label={leadership.style}
          route={RouteConstants.users.show(user.id)}
          type={'h6'}
          value={user.full_name} />
      );
    } else {
      return (
        <CardAttribute
          action={() => this.storePairing(leadership.id)}
          editable={this.props.editable}
          key={leadership.id}
          label={leadership.style}
          type={'h6'} />
      );
    }
  }

  renderLeaderships() {
    var leaderships = this.props.group.leaderships;
    return leaderships.map((leadership) => this.renderLeadership(leadership));
  }

  render() {
    return (
      <div style={StyleConstants.cards.content}>
        {this.renderLeaderships()}
      </div>
    );
  }
}
