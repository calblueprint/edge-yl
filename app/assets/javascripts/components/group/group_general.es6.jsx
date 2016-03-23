class GroupGeneral extends Component {

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
  // Render
  // --------------------------------------------------
  render() {
    var group = this.props.group;
    return (
      <div style={StyleConstants.cards.content}>
        <CardAttribute
          label={'Letter'}
          value={group.letter} />
        <CardAttribute
          clickable={true}
          label={'Conference'}
          route={RouteConstants.conferences.show(group.conference.id)}
          type={'h6'}
          value={group.conference.name} />
      </div>
    );
  }
}
