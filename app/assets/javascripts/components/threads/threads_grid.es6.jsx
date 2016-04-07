class ThreadsGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      media: React.PropTypes.string.isRequired,
      threads: React.PropTypes.array.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderCard(thread) {
    return (
      <ThreadsCard
        editable={this.props.editable}
        key={thread.id}
        media={this.props.media}
        thread={thread} />
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
