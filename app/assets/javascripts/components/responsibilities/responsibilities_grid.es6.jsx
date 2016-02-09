class ResponsibilitiesGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
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
        responsibility={responsibility} />
    );
  }

  renderCards() {
    return this.props.responsibilities.map((responsibility) => this.renderCard(responsibility));
  }

  render() {
    return (
      <div style={StyleConstants.grids.wrap}>
        {this.renderCards()}
      </div>
    );
  }
}
