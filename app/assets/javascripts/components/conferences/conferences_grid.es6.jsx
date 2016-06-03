class ConferencesGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conferences: React.PropTypes.array.isRequired,
      media: React.PropTypes.string.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderCard(conference) {
    return (
      <ConferencesCard
        conference={conference}
        key={conference.id}
        media={this.props.media} />
    );
  }

  renderCards() {
    return this.props.conferences.map((conference) => this.renderCard(conference));
  }

  renderEmpty() {
    if (!this.props.conferences.length) {
      return (
        <GridEmpty
          content={'There are currently no conferences.'} />
      );
    }
  }

  render() {
    return (
      <div style={StyleConstants.grids.wrap}>
        {this.renderCards()}
        {this.renderEmpty()}
      </div>
    );
  }
}
