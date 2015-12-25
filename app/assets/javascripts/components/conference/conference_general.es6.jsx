class ConferenceGeneral extends Component {

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
          label={'Name'}
          value={conference.name} />
        <CardAttribute
          label={'Location'}
          value={conference.location} />
        <CardAttribute
          label={'Start date'}
          value={conference.start_date} />
        <CardAttribute
          label={'End date'}
          value={conference.end_date} />
      </div>
    );
  }
}
