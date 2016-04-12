class FormTextarea extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      question: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentDidMount() {
    var node = ReactDOM.findDOMNode(this.refs.container);
    node.oninput = (event) => this.handleChange(event);
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleChange(event) {
    var question = this.props.question;
    FormActions.storeResponse(
      question.page_id,
      question.id,
      event.target.value,
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderError() {
    var error = this.props.question.error;
    if (error) {
      return (
        <h6 style={StyleConstants.forms.questions.errors}>
          {error}
        </h6>
      );
    }
  }

  renderRequired() {
    if (this.props.question.is_required) {
      return (
        <p style={StyleConstants.forms.questions.required}>
          {'*'}
        </p>
      );
    }
  }

  renderTextarea() {
    var question = this.props.question;
    return (
      <textarea
        ref={'container'}
        style={StyleConstants.forms.questions.input(question.error)}
        placeholder={question.placeholder}
        value={question.value} />
    );
  }

  render() {
    return (
      <div style={StyleConstants.forms.questions.container}>
        <div style={StyleConstants.forms.questions.prompt}>
          <h5>{this.props.question.title}{this.renderRequired()}</h5>
        </div>
        <div style={StyleConstants.forms.questions.response}>
          {this.renderTextarea()}
          {this.renderError()}
        </div>
      </div>
    );
  }
}
