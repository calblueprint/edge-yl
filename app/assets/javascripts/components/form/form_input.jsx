class FormInput extends Component {

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
  renderDescription() {
    var question = this.props.question;
    console.log(StyleConstants.forms.questions.description);
    if (question.description) {
      return (
        <p style={StyleConstants.forms.questions.description}>
          {question.description}
        </p>
      );
    }
  }

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

  renderInput() {
    var question = this.props.question;
    return (
      <input
        placeholder={question.placeholder}
        ref={'container'}
        style={StyleConstants.forms.questions.input(question.error)}
        type={question.format}
        value={question.value} />
    );
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

  render() {
    return (
      <div style={StyleConstants.forms.questions.container}>
        <div style={StyleConstants.forms.questions.prompt}>
          <h5>{this.props.question.title}{this.renderRequired()}</h5>
          {this.renderDescription()}
        </div>
        <div style={StyleConstants.forms.questions.response}>
          {this.renderInput()}
          {this.renderError()}
        </div>
      </div>
    );
  }
}
