class ContactsGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      contacts: React.PropTypes.array.isRequired,
      editable: React.PropTypes.bool.isRequired,
      media: React.PropTypes.string.isRequired,
    };
  }

  // -----------------------------w---------------------
  // Render
  // --------------------------------------------------
  renderCard(contact) {
    return (
      <ContactsCard
        contact={contact}
        editable={this.props.editable}
        key={contact.id}
        media={this.props.media} />
    );
  }

  renderCards() {
    return this.props.contacts.map((contact) => this.renderCard(contact));
  }

  render() {
    return (
      <div style={StyleConstants.grids.wrap}>
        {this.renderCards()}
      </div>
    );
  }
}
