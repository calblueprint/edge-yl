class SchoolsGrid extends Component {

  static get propTypes() {
    return {
      schools: React.PropTypes.array.isRequired,
    };
  }

  static get defaultProps() {
    return {
      schools: [],
    };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'wrap',
        justifyContent: 'space-between',
        alignContent: 'flex-start',
        flex: '1',
      },
    };
  }

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
      <div style={this.styles.container}>
        {this.renderCards()}
      </div>
    );
  }
}
