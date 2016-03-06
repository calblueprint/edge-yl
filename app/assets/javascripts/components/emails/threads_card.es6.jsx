class ThreadsCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      media: React.PropTypes.string.isRequired,
      thread: React.PropTypes.object.isRequired,
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

  generateEmailParticipants(thread) {
    var participants = {};
    thread.emails.map((email) => {
      participants[email['emailable_name']] = email;
    });
    participants = Object.keys(participants).map((k) => {
      var email = participants[k];
      return (
        <Clickable
          content={email['emailable_name']}
          route={this.generateEmailableRoute(email)}
          type={'h6'} />
      );
    });
    return participants;
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var thread = this.props.thread;
    return (
      <div style={StyleConstants.cards.container('small')}>
        <div style={this.styles.container}>
          <div style={this.styles.section}>
            {this.generateEmailParticipants(thread)}
          </div>
          <div style={this.styles.section}>
            <Clickable
              content={thread.subject}
              route={this.generateEmailRoute(thread)}
              type={'h6'} />
            <p style={this.styles.divider}>{'--'}</p>
            <p>{thread.content}</p>
          </div>
        </div>
      </div>
    );
  }
}
