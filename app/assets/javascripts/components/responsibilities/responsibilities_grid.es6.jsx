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
  // Styles
  // --------------------------------------------------
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
      <div style={this.styles.container}>
        {this.renderCards()}
      </div>
    );
  }
}
