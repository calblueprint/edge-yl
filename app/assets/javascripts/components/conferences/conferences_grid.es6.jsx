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
      container: {
        display: 'flex',
        flexFlow: 'wrap',
        justifyContent: 'space-between',
        alignContent: 'flex-start',
      },
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
      <div style={this.styles.container}>
        <div style={this.styles.header}>
          <h2>{'Conferences'}</h2>
          <Clickable
            content={'+ New Conference'}
            type={'h3'} />
        </div>
        {this.renderCards()}
      </div>
    );
  }
}
