class ResponsibilitiesGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      media: React.PropTypes.string.isRequired,
      responsibilities: React.PropTypes.array.isRequired,
      type: React.PropTypes.oneOf([
        TypeConstants.pages.school,
        TypeConstants.pages.user,
      ]).isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderCard(responsibility) {
    return (
      <ResponsibilitiesCard
        editable={this.props.editable}
        key={responsibility.id}
        media={this.props.media}
        responsibility={responsibility}
        type={this.props.type} />
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
