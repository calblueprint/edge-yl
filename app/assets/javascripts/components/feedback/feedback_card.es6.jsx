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
          width: '472px',
          padding: '24px',
          marginTop: '24px',
        }
      ),
      header: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '24px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderForm() {
    if (this.props.template.type === 'entry') {
      return (
        <FeedbackForm
           template={this.props.template}
           profile ={this.props.profile} />
      );
    } else {
      return <span>Thank you for submitting your feedback.</span>;
    }
  }

  renderHeader() {
    return (
      <div style={this.styles.header}>
        <h2>Feedback</h2>
      </div>
    );
  }

  render() {
    return (
      <div style={this.styles.container}>
        {this.renderHeader()}
        {this.renderForm()}
      </div>
    );
  }
}
