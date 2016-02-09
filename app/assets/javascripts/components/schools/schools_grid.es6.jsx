class SchoolsGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      media: React.PropTypes.string.isRequired,
      schools: React.PropTypes.array.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderCard(school) {
    return (
      <SchoolsCard
        key={school.id}
        media={this.props.media}
        school={school} />
    );
  }

  renderCards() {
    return this.props.schools.map((school) => this.renderCard(school));
  }

  render() {
    return (
      <div style={StyleConstants.grids.wrap}>
        {this.renderCards()}
      </div>
    );
  }
}
