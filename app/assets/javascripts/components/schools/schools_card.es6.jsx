class SchoolsCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      school: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get clickableStyles() {
    return {
      hover: {
        textDecoration: 'underline',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var school = this.props.school;
    return (
      <div style={StyleConstants.cards.index}>
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
