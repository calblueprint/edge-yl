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
        flexFlow: 'column',
        padding: '16px',
      },
      divider: {
        padding: '0px 4px',
      },
      section: {
        display: 'flex',
        textOverflow: 'ellipses',
      },
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateEmailRoute(email) {
    if (email.is_draft) {
      return RouteConstants.drafts.show(email.id);
    } else {
      return RouteConstants.emails.show(email.id);
    }
  }

  generateEmailableRoute(email) {
    if (email.emailable_type === 'Student') {
      return RouteConstants.students.show(email.emailable_id);
    } else if (email.emailable_type === 'School') {
      return RouteConstants.schools.show(email.emailable_id);
    } else {
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
            route={this.generateEmailableRoute(email)}
            type={'h6'} />
          <div style={this.styles.section}>
            <Clickable
              content={email.subject}
              route={this.generateEmailRoute(email)}
              type={'h6'} />
            <p style={this.styles.divider}>{'--'}</p>
            <p>{email.content}</p>
          </div>
        </div>
      </div>
    );
  }
}
