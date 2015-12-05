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
      <div style={StyleConstants.cards.grid}>
        <Clickable
          content={conference.location}
          route={RouteConstants.conferences.show(conference.id)}
          styles={this.clickableStyles}
          type={'h3'} />
      </div>
    );
  }
}
