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
  // Render
  // --------------------------------------------------
  render() {
    var school = this.props.school;
    return (
      <div style={StyleConstants.cards.index}>
        <Clickable
          content={school.name}
          route={RouteConstants.schools.show(school.id)}
          type={'h3'} />
        <h6>{school.website}</h6>
      </div>
    );
  }
}
