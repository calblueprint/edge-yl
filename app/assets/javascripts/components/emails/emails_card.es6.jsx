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
  // Helpers
  // --------------------------------------------------
  generateRoute(email) {
    if (email['emailable_type'] === 'Student') {
      return RouteConstants.students.show(email['emailable_id']);
    } else if (email.emailable_type === 'School') {
      return RouteConstants.schools.show(email['emailable_id']);
    } else{
      return '#';
    }
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var email = this.props.email;
    return (
      <div style={StyleConstants.cards.container('small')}>
        <div style={this.styles.container}>
          <Clickable
            content={email.from}
            route={this.generateRoute(email)}
            type={'h6'} />
          <Clickable
            content={`Subject: ${email.subject}`}
            route={RouteConstants.emails.show(email.id)}
            type={'p'} />
        </div>
      </div>
    );
  }
}
