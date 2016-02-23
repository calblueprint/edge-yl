class FeedbackCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      profile: React.PropTypes.object.isRequired,
      template: React.PropTypes.object.isRequired,
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
          marginTop: '24px',
        }
      ),
      footer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '12px',
      },
      header: {
        display: 'flex',
        justifyContent: 'center',
      },
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  createFeedback() {
    FeedbackActions.createFeedback(this.props.template, this.props.profile);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderForm() {
    if (this.props.template.type === 'entry') {
      return (
        <FeedbackForm
          profile={this.props.profile}
          template={this.props.template} />
      );
    } else {
      return <span>Thank you for submitting your feedback.</span>;
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.header}>
          <h2>{'Feedback'}</h2>
        </div>
        {this.renderForm()}
        <div style={this.styles.footer}>
          <FormButton
            action={() => this.createFeedback()}
            content={'Submit'} />
        </div>
      </div>
    );
  }
}
