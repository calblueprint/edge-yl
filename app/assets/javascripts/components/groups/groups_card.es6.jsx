class GroupsCard extends Component {

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
  render() {
    var group = this.props.group;
    return (
      <div style={StyleConstants.cards.index}>
        <Clickable
          content={`Group ${group.name}`}
          route={RouteConstants.groups.show(group.conference_id, group.id)}
          type={'h3'} />
        <h6>{group.primary_leader}</h6>
        <h6>{group.secondary_leader}</h6>
      </div>
    );
  }
}
