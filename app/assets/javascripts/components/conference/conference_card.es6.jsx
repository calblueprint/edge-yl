class ConferenceCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      conference: {},
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          display: 'flex',
          flexFlow: 'column',
          width: '50%',
          height: '512px',
          marginTop: '1%',
        }
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
  // Render
  // --------------------------------------------------
  render() {
    var conference = this.props.conference;
    return (
      <div style={this.styles.container}>
        <CardHeader
          action={(event) => ConferenceActions.storeOverlay(true, TypeConstants.overlay.type.edit)}
          content={`Conference ${conference.id}`}
          icon={TypeConstants.icons.edit} />
        <div style={this.styles.section}>
          <h3>{`Conference Location: ${conference.location}`}</h3>
          <h3>{`Start Date: ${conference.start_date}`}</h3>
          <h3>{`End Date: ${conference.end_date}`}</h3>
      </div>
      </div>
    );
  }
}
