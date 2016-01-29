class GroupsCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      group: React.PropTypes.object.isRequired,
      media: React.PropTypes.string.isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  deleteGroupFromConference() {
    ConferenceActions.deleteGroup(this.props.group.id);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderHeader() {
    if (this.props.editable) {
      return (
        <CardHeader
          action={() => this.deleteGroupFromConference()}
          content={'Group'}
          icon={TypeConstants.icons.delete} />
      );
    } else {
      return <CardHeader content={'Group'} />;
    }
  }

  renderLeadership(leadership) {
    var user = leadership.user;
    if (user) {
      return (
        <CardAttribute
          clickable={true}
          key={leadership.id}
          label={leadership.style}
          route={RouteConstants.users.show(user.id)}
          type={'h6'}
          value={user.full_name} />
      );
    } else {
      return (
        <CardAttribute
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
    var group = this.props.group;
    return (
      <div style={StyleConstants.cards.wrapper(this.props.media)}>
        {this.renderHeader()}
        <div style={StyleConstants.cards.body}>
          <CardAttribute
            clickable={true}
            label={'Name'}
            route={RouteConstants.groups.show(group.id)}
            type={'h4'}
            value={group.full_name} />
          {this.renderLeaderships()}
        </div>
      </div>
    );
  }
}
