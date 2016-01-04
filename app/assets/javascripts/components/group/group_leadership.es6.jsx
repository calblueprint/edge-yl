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
  storeTemplate(type, id, key, value) {
    GroupActions.storeTemplate(type, id, key, value);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderLeadership(leadership) {
    var user = leadership.user;
    if (user) {
      return (
        <CardAttribute
          action={() => this.storeTemplate('dropdown', leadership.id, 'user', user)}
          clickable={true}
          editable={this.props.editable}
          key={leadership.id}
          label={leadership.style}
          route={RouteConstants.users.show(user.id)}
          value={user.full_name} />
      );
    } else {
      return (
        <CardAttribute
          action={() => this.storeTemplate('dropdown', leadership.id, 'user')}
          editable={this.props.editable}
          key={leadership.id}
          label={leadership.style} />
      );
    }
  }

  renderLeaderships() {
    var leaderships = this.props.group.leaderships;
    return leaderships.map((leadership) => this.renderLeadership(leadership));
  }

  render() {
    return (
      <div style={StyleConstants.cards.body}>
        {this.renderLeaderships()}
      </div>
    );
  }
}
