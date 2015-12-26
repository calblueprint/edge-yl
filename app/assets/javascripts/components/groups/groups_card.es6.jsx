class GroupsCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      group: React.PropTypes.object.isRequired,
      media: React.PropTypes.string.isRequired,
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
    var group = this.props.group;
    return (
      <div style={StyleConstants.cards.index(this.props.media)}>
        <CardAttribute
          clickable={true}
          label={'Name'}
          route={RouteConstants.groups.show(group.conference_id, group.id)}
          type={'h4'}
          value={group.full_name} />
        {this.renderLeaderships()}
      </div>
    );
  }
}
