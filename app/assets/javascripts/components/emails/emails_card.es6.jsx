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
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        padding: '16px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderFrom() {
    // TODO: This should route to the appropriate emailable show page.
    return (
      <Clickable
        content={email.from}
        route={RouteConstants.emails.show(email.id)}
        type={'h6'} />
    );
  }

  render() {
    var email = this.props.email;
    return (
      <div style={StyleConstants.cards.container('small')}>
        <div style={this.styles.container}>
          {this.renderFrom()}
          <Clickable
            content={`Subject: ${email.subject}`}
            route={RouteConstants.emails.show(email.id)}
            type={'p'} />
        </div>
      </div>
    );
  }
}
