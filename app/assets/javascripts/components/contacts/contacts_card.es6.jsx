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

  generateOptions() {
    return [
      {
        action: () => this.deleteContact(),
        icon: TypeConstants.icons.delete,
      },
      {
        action: () => this.promoteContact(),
        icon: TypeConstants.icons.promote,
      },
    ];
  }

  promoteContact() {
    var contact = this.props.contact
    var pairing = {
      id: contact.id,
      key: 'is_primary',
      school_id: contact.school_id,
      value: true,
    };
    SchoolActions.promoteContact(pairing);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderHeader() {
    if (this.props.editable) {
      return (
        <ContactHeader
          options={this.generateOptions()}
          content={'Contact Information'} />
      );
    } else {
      return <CardHeader content={'Contact Information'} />;
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
