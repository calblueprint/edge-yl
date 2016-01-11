class EmailsGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      emails: React.PropTypes.array.isRequired,
      media: React.PropTypes.string.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderCard(email) {
    return (
      <div key={email.id} style={{ display: 'flex', flexFlow: 'column'}}>
        <h6>{`Sender: ${email.sender}`}</h6>
        <h6>{`Recipient: ${email.recipient}`}</h6>
        <h6>{`Subject: ${email.subject}`}</h6>
        <h6>{`Content: ${email.content}`}</h6>
      </div>
    );
  }

  renderCards() {
    return this.props.emails.map((email) => this.renderCard(email));
  }

  render() {
    return (
      <div style={StyleConstants.containers.grid}>
        {this.renderCards()}
      </div>
    );
  }
}
