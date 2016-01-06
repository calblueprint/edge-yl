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
        <CardAttribute
          clickable={true}
          label={'Conference'}
          route={RouteConstants.conferences.show(group.conference.id)}
          type={'h5'}
          value={group.conference.name} />
      </div>
    );
  }
}
