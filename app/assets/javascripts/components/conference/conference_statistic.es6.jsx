class ConferenceStatistic extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var conference = this.props.conference;
    return (
      <div style={StyleConstants.cards.body}>
        <CardAttribute
          label={'Groups count'}
          value={conference.groups_count} />
        <CardAttribute
          label={'Rooms count'}
          value={conference.rooms_count} />
      </div>
    );
  }
}
