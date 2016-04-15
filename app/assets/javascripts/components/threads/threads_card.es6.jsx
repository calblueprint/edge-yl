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
    var thread = this.props.thread;
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.container('small'),
        {
          padding: '16px',
          backgroundColor: thread.is_unread ? '#ffffff' : '#f6f6f6',
        },
      ),
      divider: {
        padding: '0px 4px',
      },
      header: {
        display: 'flex',
        justifyContent: 'space-between',
      },
      icon: {
        color: StyleConstants.colors.blue,
      },
      section: {
        display: 'flex',
      },
      subject: {
        paddingRight: '8px',
      },
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  deleteThread() {
    ThreadsActions.deleteThread(this.props.thread.id);
  }

  emailsCount() {
    var count = this.props.thread.emails_count;
    if (count > 1) {
      return ` (${count})`;
    } else {
      return '';
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

  generateThreadParticipant() {
    var thread = this.props.thread;
    return (
      <Clickable
        content={thread['emailable_name']}
        route={this.generateEmailableRoute(thread)}
        type={'h6'} />
    );
  }

  generateThreadRoute() {
    return RouteConstants.threads.show(this.props.thread.id);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderOptions() {
    if (this.props.editable) {
      return (
        <Clickable
          action={() => this.deleteThread()}
          icon={TypeConstants.icons.delete}
          type={'i-left'} />
      );
    }
  }

  render() {
    var thread = this.props.thread;
    return (
      <div style={this.styles.container}>
        <div style={this.styles.header}>
          <h6>{this.generateThreadParticipant()}</h6>
          <div style={this.styles.section}>
            <p>{thread.updated_at}</p>
            {this.renderOptions()}
          </div>
        </div>
        <Clickable
          route={this.generateThreadRoute()}
          type={'div'}>
          <div style={this.styles.section}>
            <h6 style={this.styles.subject}>
              {`${thread.subject} ${this.emailsCount()}`}
            </h6>
            <p>{thread.content_preview}</p>
          </div>
        </Clickable>
      </div>
    );
  }
}
