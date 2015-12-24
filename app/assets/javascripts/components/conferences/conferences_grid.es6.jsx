class ConferencesGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conferences: React.PropTypes.array.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '100%',
        marginTop: '12px',
      },
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  showOverlay() {
    ConferencesActions.storeOverlay(
      true,
      TypeConstants.actions.edit,
      'conference'
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderCard(conference) {
    return (
      <ConferencesCard
        conference={conference}
        key={conference.id} />
    );
  }

  renderCards() {
    return this.props.conferences.map((conference) => this.renderCard(conference));
  }

  render() {
    return (
      <div style={StyleConstants.containers.grid}>
        <div style={this.styles.header}>
          <h2>{'Conferences'}</h2>
          <Clickable
            action={() => this.showOverlay()}
            content={'+ New Conference'}
            type={'h3'} />
        </div>
        {this.renderCards()}
      </div>
    );
  }
}
