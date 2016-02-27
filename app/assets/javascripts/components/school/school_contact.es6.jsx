class SchoolContact extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      school: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  storePairing(key) {
    var contact = this.props.school.primary_contact;
    SchoolActions.storePairing({
      id: contact.id,
      key: key,
      model: TypeConstants.models.contact,
      type: 'input',
      value: contact[key],
    });
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var contact = this.props.school.primary_contact;
    return (
      <div style={StyleConstants.cards.content}>
        <CardAttribute
          action={() => this.storePairing('first_name')}
          editable={this.props.editable}
          label={'First name'}
          value={contact.first_name} />
        <CardAttribute
          action={() => this.storePairing('last_name')}
          editable={this.props.editable}
          label={'Last name'}
          value={contact.last_name} />
        <CardAttribute
          action={() => this.storePairing('phone_number')}
          editable={this.props.editable}
          label={'Phone number'}
          value={contact.phone_number} />
        <CardAttribute
          action={() => this.storePairing('title')}
          editable={this.props.editable}
          label={'Title'}
          value={contact.title} />
      </div>
    );
  }
}
