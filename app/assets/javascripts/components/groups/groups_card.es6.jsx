class GroupsCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      group: React.PropTypes.object.isRequired,
      media: React.PropTypes.string.isRequired,
      type: React.PropTypes.oneOf([
        TypeConstants.groups.conference,
        TypeConstants.groups.default,
      ]).isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  deleteGroup() {
    if (this.props.type === TypeConstants.groups.conference) {
      ConferenceActions.deleteGroup(this.props.group.id);
    } else if (this.props.type === TypeConstants.groups.default) {
      GroupsActions.deleteGroup(this.props.group.id);
    }
  }

  generateOptions() {
    return [
      {
        action: () => this.deleteGroup(),
        icon: TypeConstants.icons.delete,
      },
    ];
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderHeader() {
    if (this.props.editable) {
      return (
        <CardHeader
          content={'Group'}
          options={this.generateOptions()} />
      );
    } else {
      return <CardHeader content={'Group'} />;
    }
  }

  renderLeadership(leadership) {
    var leadershipable = leadership.leadershipable;
    if (leadershipable) {
      var route;
      if (leadership.leadershipable_type == 'User') {
        route = RouteConstants.users.show(leadershipable.id);
      } else {
        route = RouteConstants.volunteers.show(leadershipable.id);
      }
      return (
        <CardAttribute
          clickable={true}
          key={leadership.id}
          label={leadership.style}
          route={route}
          type={'h6'}
          value={leadershipable.full_name} />
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
      <div style={StyleConstants.cards.container(this.props.media)}>
        {this.renderHeader()}
        <div style={StyleConstants.cards.content}>
          <CardAttribute
            clickable={true}
            label={'Name'}
            route={RouteConstants.groups.show(group.id)}
            type={'h4'}
            value={group.full_name} />
          {this.renderLeaderships()}
          <CardAttribute
            clickable={false}
            label={'Students count'}
            type={'p'}
            value={group.students_count} />
        </div>
      </div>
    );
  }
}
