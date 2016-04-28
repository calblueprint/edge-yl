class VolunteerGeneral extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      volunteer: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  storeTemplate(key, choices) {
    var volunteer = this.props.volunteer;
    VolunteerActions.storeTemplate({
      choices: choices,
      id: volunteer.id,
      key: key,
      model: TypeConstants.models.volunteer,
      type: choices ? 'dropdown' : 'input',
      value: volunteer[key],
    });
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var volunteer = this.props.volunteer;
    return (
      <div style={StyleConstants.cards.content}>
        <CardAttribute
          action={() => this.storeTemplate('first_name')}
          editable={this.props.editable}
          label={'First name'}
          value={volunteer.first_name} />
        <CardAttribute
          action={() => this.storeTemplate('last_name')}
          editable={this.props.editable}
          label={'Last name'}
          value={volunteer.last_name} />
        <CardAttribute
          action={() => this.storeTemplate('email')}
          editable={this.props.editable}
          humanize={false}
          label={'Email'}
          value={volunteer.email} />
      </div>
    );
  }
}
