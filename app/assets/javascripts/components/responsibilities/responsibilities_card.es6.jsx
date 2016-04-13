class ResponsibilitiesCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      media: React.PropTypes.string.isRequired,
      responsibility: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var school = this.props.responsibility.school;
    return (
      <div style={StyleConstants.cards.container(this.props.media)}>
        <CardHeader content={'Responsibility'} />
        <div style={StyleConstants.cards.content}>
          <CardAttribute
            clickable={true}
            label={'Name'}
            route={RouteConstants.schools.show(school.id)}
            type={'h4'}
            value={school.name} />
          <CardAttribute
            label={'Website'}
            value={school.website} />
          <CardAttribute
            label={'Contact name'}
            value={`${school.primary_contact.first_name} ${school.primary_contact.last_name}`} />
          <CardAttribute
            label={'Contact phone number'}
            value={school.primary_contact.phone_number} />
          <CardAttribute
            label={'Contact email'}
            value={school.primary_contact.email} />
          </div>
      </div>
    );
  }
}
