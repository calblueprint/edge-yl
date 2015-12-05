class SchoolsCard extends Component {

static get propTypes() {
    return {
      school: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get defaultProps() {
    return {
      school: null,
    };
  }

// --------------------------------------------------
  // Render
  // --------------------------------------------------
  get clickableStyles() {
    return {
      hover: {
        textDecoration: 'underline',
      },
    };
  }

  render() {
    var school = this.props.school;
    return (
      <div style={StyleConstants.cards.grid}>
        <Clickable
          content={school.name}
          route={RouteConstants.schools.show(school.id)}
          styles={this.clickableStyles}
          type={'h3'} />
        <h6>{school.address}</h6>
      </div>
    );
  }
}
