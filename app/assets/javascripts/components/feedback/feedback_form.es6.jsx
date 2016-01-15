class FeedbackForm extends Component {

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
      container: {
        display: 'flex',
        flexFlow: 'column',
      },
      error: {
        flex: 1,
        marginTop: '12px',
        color: StyleConstants.colors.red,
        textAlign: 'center',
      },
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentDidMount() {
    var container = ReactDOM.findDOMNode(this.refs.container);
    container.addEventListener('keydown', (event) => this.handleKeyDown(event));
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  createFeedback() {
    FeedbackActions.createFeedback(this.props.template, this.props.profile);
  }

  storeFeedback(field) {
    return(event) => {
      FeedbackActions.saveFeedback(event.target.value);
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleKeyDown(event) {
    if (event.keyCode === 13) {
      this.createSession();
    }
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderError() {
    var template = this.props.template;
    if (template.message) {
      return (
        <h6 style={this.styles.error}>
          {template.message}
        </h6>
      );
    }
  }

  render() {
    var template = this.props.template;
    return (
      <div ref={'container'} style={this.styles.container}>
        <CardInput
          action={this.storeFeedback()}
          errors={template.errors.content}
          focus={true}
          label={'Message'}
          placeholder={'Your feedback here'}
          type={'text'}
          value={template.content} />
        {this.renderError()}
        <FormButton
          action={() => this.createFeedback()}
          content={'Submit'}
          margin={this.props.template.message ? 12 : 24} />
      </div>
    );
  }
}
