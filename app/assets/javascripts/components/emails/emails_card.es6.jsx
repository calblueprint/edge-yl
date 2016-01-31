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
      <div style={StyleConstants.cards.show(this.props.media)}>
        <a href={RouteConstants.emails.show(email.id)}>{`${email.sender} - ${email.subject}`}</a>
      </div>
    );

  }
}
