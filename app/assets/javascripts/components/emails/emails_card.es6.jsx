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
          padding: '24px',
          marginTop: '12px',
        },
      ),
      header: {
        display: 'flex',
        justifyContent: 'space-between',
      },
      section: {
        display: 'flex',
        flexFlow: 'column',
      },
      draft: {
        color: 'red',
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
          <div style={this.styles.section}>
            <h6>{'From'}</h6>
            <p>{email.from}</p>
            <h6>{'To'}</h6>
            <p>{email.to}</p>
          </div>
          <p>{email.updated_at}</p>
        </div>
        <h6>{'Content'}</h6>
        <p>{email.content}</p>
      </div>
    );
  }
}
