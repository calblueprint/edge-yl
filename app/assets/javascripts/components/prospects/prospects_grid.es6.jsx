class ProspectsGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool,
      media: React.PropTypes.string.isRequired,
      prospects: React.PropTypes.array.isRequired,
    };
  }

  static get defaultProps() {
    return {
      editable: false,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderCard(prospect) {
    return (
      <ProspectsCard
        editable={this.props.editable}
        key={prospect.id}
        media={this.props.media}
        prospect={prospect} />
    );
  }

  renderCards() {
    return this.props.prospects.map((prospect) => this.renderCard(prospect));
  }

  renderEmpty() {
    if (!this.props.prospects.length) {
      return (
        <GridEmpty
          content={'There are currently no prospects.'} />
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
