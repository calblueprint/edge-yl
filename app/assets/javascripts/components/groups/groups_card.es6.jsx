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
  render() {
    var group = this.props.group;
    return (
      <div style={StyleConstants.cards.index(this.props.media)}>
        <CardAttribute
          clickable={true}
          label={'Name'}
          route={RouteConstants.groups.show(group.conference_id, group.id)}
          type={'h4'}
          value={`Group ${group.name}`} />
        <CardAttribute
          label={'Primary leader'}
          value={group.primary_leader} />
        <CardAttribute
          label={'Secondary leader'}
          value={group.secondary_leader} />
      </div>
    );
  }
}
