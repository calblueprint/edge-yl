class PartialSchoolsGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool,
      media: React.PropTypes.string.isRequired,
      schools: React.PropTypes.array.isRequired,
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
  renderCard(school) {
    return (
      <PartialSchoolsCard
        editable={this.props.editable}
        key={school.id}
        media={this.props.media}
        school={school} />
    );
  }

  renderCards() {
    return this.props.schools.map((school) => this.renderCard(school));
  }

  renderEmpty() {
    if (!this.props.schools.length) {
      return (
        <GridEmpty
          content={'There are currently no schools.'} />
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
