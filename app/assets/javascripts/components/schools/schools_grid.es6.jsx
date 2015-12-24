class SchoolsGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
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
        school={school} />
    );
  }

  renderCards() {
    return this.props.schools.map((school) => this.renderCard(school));
  }

  render() {
    return (
      <div style={StyleConstants.containers.grid}>
        {this.renderCards()}
      </div>
    );
  }
}
