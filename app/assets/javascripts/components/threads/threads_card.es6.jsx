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
    if(count > 1) {
      return ` (${count})`;
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
      <div style={this.styles.container}>
        <div style={this.styles.header}>
          <h6>{this.generateThreadParticipant()}</h6>
          {this.renderOptions()}
        </div>
        <Clickable
          route={this.generateThreadRoute()}
          type={'div'}>
          <div style={this.styles.section}>
            {this.renderNewIcon()}
            <h6>{`${thread.subject} ${this.emailsCount()}`}</h6>
            <p style={this.styles.divider}>{'--'}</p>
            <p>{thread.content}</p>
          </div>
        </Clickable>
      </div>
    );
  }
}
