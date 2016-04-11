class ResponsibilitiesGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      media: React.PropTypes.string.isRequired,
      responsibilities: React.PropTypes.array.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderCard(responsibility) {
    return (
      <ResponsibilitiesCard
        key={responsibility.id}
        media={this.props.media}
        responsibility={responsibility} />
    );
  }

  renderCards() {
    return this.props.responsibilities.map((responsibility) => this.renderCard(responsibility));
  }

  renderEmpty() {
    if (!this.props.responsibilities.length) {
      return (
        <GridEmpty
          content={'There are currently no responsibilities.'} />
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
