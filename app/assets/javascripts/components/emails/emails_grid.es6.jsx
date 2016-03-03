class EmailsGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      media: React.PropTypes.string.isRequired,
      threads: React.PropTypes.array.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderCard(thread) {
    return (
      <EmailsCard
        thread={thread}
        key={thread.id}
        media={this.props.media} />
    );
  }

  renderCards() {
    return this.props.threads.map((thread) => this.renderCard(thread));
  }

  render() {
    return (
      <div style={StyleConstants.grids.column}>
        {this.renderCards()}
      </div>
    );
  }
}
