class ContactsCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      contact: React.PropTypes.object.isRequired,
      editable: React.PropTypes.bool.isRequired,
      media: React.PropTypes.string.isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  deleteContact() {
    SchoolActions.deleteContact(this.props.contact.id)
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderHeader() {
    if (this.props.editable) {
      return (
        <CardHeader
          action={() => this.deleteContact()}
          content={'Group'}
          icon={TypeConstants.icons.delete} />
      );
    } else {
      return <CardHeader content={'Content Information'} />;
    }
  }
  render() {
    var contact = this.props.contact;
    return (
      <div style={StyleConstants.cards.container(this.props.media)}>
        {this.renderHeader()}
        <div style={StyleConstants.cards.content}>
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
