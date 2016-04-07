class ThreadsCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
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
        backgroundColor: this.props.thread.is_unread ? '#ffffff' : '#f6f6f6',
      },
      divider: {
        padding: '0px 4px',
      },
      icon: {
        color: StyleConstants.colors.blue,
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
  deleteThread() {
    ThreadsActions.deleteThread(this.props.thread.id);
  }

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

  generateOptions() {
    return [
      {
        action: () => this.deleteThread(),
        icon: TypeConstants.icons.delete,
      },
    ];
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderHeader() {
    if (this.props.editable) {
      return (
        <CardHeader
          content={'Thread'}
          options={this.generateOptions()} />
      );
    } else {
      return <CardHeader content={'Thread'} />
    }
  }

  renderNewIcon() {
    if (this.props.thread.is_unread) {
      return (
        <i className={'fa-circle'} style={this.styles.icon} />
      );
    }
  }

  render() {
    var thread = this.props.thread;
    return (
      <div style={StyleConstants.cards.container('small')}>
        {this.renderHeader()}
        <div style={this.styles.container}>
          <div style={this.styles.section}>
            {this.generateEmailParticipants(thread)}
          </div>
          <div style={this.styles.section}>
            {this.renderNewIcon()}
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
