class ContactsCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      contact: React.PropTypes.object.isRequired,
      media: React.PropTypes.string.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var contact = this.props.contact;
    return (
      <div style={StyleConstants.cards.wrapper(this.props.media)}>
        <CardHeader content={'Contact Information'} />
        <div style={StyleConstants.cards.body}>
          <h5>{'Secondary'}</h5>
          <CardAttribute
            label={'First name'}
            value={contact.first_name} />
          <CardAttribute
            label={'Last name'}
            value={contact.last_name} />
          <CardAttribute
            label={'Phone number'}
            value={contact.phone_number} />
          <CardAttribute
            label={'Title'}
            value={contact.title} />
        </div>
      </div>
    );
  }
}
