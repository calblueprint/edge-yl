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
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentDidMount() {
    var container = ReactDOM.findDOMNode(this.refs.container);
    container.onkeydown = (event) => this.handleKeyDown(event);
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
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
  render() {
    var template = this.props.template;
    return (
      <div ref={'container'} style={this.styles.container}>
        <CardTextarea
          action={this.storeFeedback()}
          errors={template.errors.content}
          focus={true}
          label={'Message'}
          placeholder={'Your feedback here'}
          type={'text'}
          value={template.content} />
      </div>
    );
  }
}
