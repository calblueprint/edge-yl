class GroupGeneral extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      group: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderLeadership(leadership) {
    var label = leadership.is_primary ? 'Primary' : 'Secondary';
    var user = leadership.user;
    if (user) {
      return (
        <CardAttribute
          clickable={true}
          key={leadership.id}
          label={`${label} leader`}
          route={RouteConstants.users.show(user.id)}
          value={user.full_name} />
      );
    } else {
      return (
        <CardAttribute
          key={leadership.id}
          label={`${label} leader`} />
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
