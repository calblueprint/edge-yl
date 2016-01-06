class SchoolsCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      media: React.PropTypes.string.isRequired,
      school: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var school = this.props.school;
    return (
      <div style={StyleConstants.cards.index(this.props.media)}>
        <CardAttribute
          clickable={true}
          label={'Name'}
          route={RouteConstants.schools.show(school.id)}
          type={'h4'}
          value={school.name} />
        <CardAttribute
          label={'Website'}
          value={school.website} />
      </div>
    );
  }
}
