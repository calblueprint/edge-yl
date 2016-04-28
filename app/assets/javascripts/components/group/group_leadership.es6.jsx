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
  storePairing(id, label, value) {
    GroupActions.storePairing({
      id: id,
      key: 'leadershipable',
      label: label,
      model: TypeConstants.models.leadership,
      type: 'dropdown',
      value: value,
    });
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
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
          action={() => this.storePairing(leadership.id, leadership.style, leadershipable)}
          clickable={true}
          editable={this.props.editable}
          key={leadership.id}
          label={leadership.style}
          route={route}
          type={'h6'}
          value={leadershipable.full_name} />
      );
    } else {
      return (
        <CardAttribute
          action={() => this.storePairing(leadership.id, leadership.style)}
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
