class VolunteersCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      media: React.PropTypes.string.isRequired,
      volunteer: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var volunteer = this.props.volunteer;
    return (
      <div style={StyleConstants.cards.container(this.props.media)}>
        <CardHeader content={'Volunteer'} />
        <div style={StyleConstants.cards.content}>
          <CardAttribute
            clickable={true}
            label={'Name'}
            route={RouteConstants.volunteers.show(volunteer.id)}
            type={'h4'}
            value={volunteer.full_name} />
          <CardAttribute
            humanize={false}
            label={'Email'}
            value={volunteer.email} />
        </div>
      </div>
    );
  }
}

