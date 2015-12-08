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
        <h6>{school.address}</h6>
        <h6>{school.counselor_name}</h6>
        <h6>{school.counselor_email}</h6>
      </div>
    );
  }
}
