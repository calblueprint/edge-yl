class ResponsibilitiesCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      media: React.PropTypes.string.isRequired,
      responsibility: React.PropTypes.object.isRequired,
      type: React.PropTypes.oneOf([
        TypeConstants.pages.school,
        TypeConstants.pages.user,
      ]).isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  storePairing(key, value) {
    SchoolActions.storePairing({
      id: this.props.responsibility.id,
      key: key,
      model: TypeConstants.models.responsibility,
      type: 'dropdown',
      value: value,
    });
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderContent() {
    if (this.props.type === TypeConstants.pages.school) {
      var conference = this.props.responsibility.conference;
      return (
        <div style={StyleConstants.cards.content}>
          <CardAttribute
            clickable={true}
            label={'Conference'}
            route={RouteConstants.conferences.show(conference.id)}
            value={conference.name} />
            {this.renderUser()}
        </div>
      );
    } else {
      var school = this.props.responsibility.school;
      return (
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
      );
    }
  }

  renderUser() {
    var user = this.props.responsibility.user;
    var editable = this.props.editable;
    if (user) {
      return (
        <CardAttribute
          action={() => this.storePairing('user_id', user)}
          clickable={true}
          editable={this.props.editable}
          label={'User name'}
          route={RouteConstants.users.show(user.id)}
          value={user.full_name} />
      );
    } else {
      return (
        <CardAttribute
          action={() => this.storePairing('user_id', user)}
          clickable={true}
          editable={this.props.editable}
          label={'User name'} />
      );
    }
  }

  render() {
    return (
      <div style={StyleConstants.cards.container(this.props.media)}>
        <CardHeader content={'Responsibility'} />
        <div style={StyleConstants.cards.content}>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}
