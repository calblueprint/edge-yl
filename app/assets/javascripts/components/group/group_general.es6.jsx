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
  render() {
    var group = this.props.group;
    return (
      <div style={StyleConstants.cards.body}>
        <CardAttribute
          label={'Letter'}
          value={group.letter} />
        <br />
        <h4>{'Conference'}</h4>
        <Clickable
          content={group.conference.name}
          route={RouteConstants.conferences.show(group.conference.id)}
          type={'h6'} />
      </div>
    );
  }
}
