class ConferencesCard extends Component {

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
      <div style={StyleConstants.cards.index}>
        <Clickable
          content={conference.name}
          route={RouteConstants.conferences.show(conference.id)}
          styles={this.clickableStyles}
          type={'h3'} />
        <h6>{conference.location}</h6>
        <h6>{`${conference.start_date} - ${conference.end_date}`}</h6>
      </div>
    );
  }
}
