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
      key: 'volunteer',
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
    var volunteer = leadership.volunteer;
    if (volunteer) {
      return (
        <CardAttribute
          action={() => this.storePairing(leadership.id, leadership.style, volunteer)}
          clickable={true}
          editable={this.props.editable}
          key={leadership.id}
          label={leadership.style}
          route={RouteConstants.volunteers.show(volunteer.id)}
          type={'h6'}
          value={volunteer.full_name} />
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
