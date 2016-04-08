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

  emailsCount() {
    var count = this.props.thread.emails_count;
    if(count > 1) {
      return ` (${count})`;
    }
  }

  generateThreadRoute(thread) {
      return RouteConstants.threads.show(thread.id);
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

  generateOptions() {
    return [
      {
        action: () => this.deleteThread(),
        icon: TypeConstants.icons.delete,
      },
    ];
  }

  generateThreadParticipant(thread) {
    return (
      <Clickable
        content={thread['emailable_name']}
        route={this.generateEmailableRoute(thread)}
        type={'h6'} />
    );
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
            {this.generateThreadParticipant(thread)}
          </div>
          <div style={this.styles.section}>
            {this.renderNewIcon()}
            <Clickable
              content={thread.subject + this.emailsCount()}
              route={this.generateThreadRoute(thread)}
              type={'h6'} />
            <p style={this.styles.divider}>{'--'}</p>
            <p>{thread.content}</p>
          </div>
        </div>
      </div>
    );
  }
}
