class EmailsCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      email: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.containers.card,
        {
          backgroundColor: this.props.email.is_unread ? "#ffffff" : "#f6f6f6",
          padding: '15px',
          marginTop: '3px',
        },
      ),
      content: {
        fontSize: '14px',
      },
      header: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-between',
      },
      from: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      },
      section: {
        display: 'flex',
        flexFlow: 'row',
      },
      to: {
        fontSize: '12px',
      },
      draft: {
        color: 'red',
      },
      timeHeader: {
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'space-between',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderDraftEdit(email) {
    if (email.is_draft) {
      return (
        <FormButton
          action={() => this.showDraft(email.id)}
          content={'Edit'} />
      );
    }
  }

  renderIsDraft(email) {
    if (email.is_draft) {
      return <span style={this.styles.draft}> (Draft)</span>;
    }
  }

  render() {
    var email = this.props.email;
    return (
      <div style={this.styles.container}>
        <div style={this.styles.header}>
          <div style={this.styles.timeHeader}>
            <div style={this.styles.section}>
              <h6>{'From:'}</h6>{' '}
              <h6 style={this.styles.from}>{email.from}</h6>
            </div>
            <p>{email.updated_at}</p>
          </div>
          <div style={this.styles.section}>
            <p style={this.styles.to}>{'To:'}</p>
            <p style={this.styles.name}>{email.to}</p>
          </div>
        </div>
        <p style={this.styles.content}>{email.content}</p>
      </div>
    );
  }
}
