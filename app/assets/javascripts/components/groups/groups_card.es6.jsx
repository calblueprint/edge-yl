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
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.index,
        this.props.media === 'big' && { width: '49%' },
        this.props.media === 'small' && { width: '100%' }
      ),
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var group = this.props.group;
    return (
      <div style={this.styles.container}>
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
