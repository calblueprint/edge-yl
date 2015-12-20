class ConferenceCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.show,
        { height: '256px' }
      ),
      section: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '12px',
        flex: '1',
      },
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  showOverlay() {
    ConferenceActions.storeOverlay(
      true,
      TypeConstants.overlay.type.edit
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var conference = this.props.conference;
    return (
      <div style={this.styles.container}>
        <CardHeader
          action={() => this.showOverlay()}
          content={conference.name}
          icon={TypeConstants.icons.edit} />
        <div style={this.styles.section}>
          <h4>{`Location: ${conference.location}`}</h4>
          <h4>{`Start Date: ${conference.start_date}`}</h4>
          <h4>{`End Date: ${conference.end_date}`}</h4>
        </div>
      </div>
    );
  }
}
