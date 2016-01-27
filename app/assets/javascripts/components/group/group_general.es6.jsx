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
  // Helpers
  // --------------------------------------------------
  storePairing(key) {
    var group = this.props.group;
    GroupActions.storePairing({
      id: group.id,
      key: key,
      type: 'input',
      value: group[key],
    });
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var group = this.props.group;
    return (
      <div style={StyleConstants.cards.body}>
        <CardAttribute
          action={() => this.storePairing('letter')}
          editable={this.props.editable}
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
