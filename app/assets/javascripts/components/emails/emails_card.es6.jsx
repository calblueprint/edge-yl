class EmailsCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      email: React.PropTypes.object.isRequired,
      media: React.PropTypes.string.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var email = this.props.email;
    return (
      <div style={StyleConstants.cards.wrapper('small')}>
        <Clickable
          content={email.sender}
          route={RouteConstants.emails.show(email.id)}
          type={'h4'} />
        <p>{`Subject: ${email.subject}`}</p>
      </div>
    );
  }
}
