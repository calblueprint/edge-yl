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
  renderErrors() {
    var errors = this.props.question.errors;
    if (errors && errors.length) {
      return (
        <h6 style={StyleConstants.forms.questions.errors}>
          {errors[0]}
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

  render() {
    // TODO(Warren): Configure input with type attribute!
    var question = this.props.question;
    return (
      <div style={StyleConstants.forms.questions.container}>
        <div style={StyleConstants.forms.questions.prompt}>
          <h6>{question.title}{this.renderRequired()}</h6>
        </div>
        <div style={StyleConstants.forms.questions.response}>
          <textarea
            ref={'container'}
            style={this.styles.input}
            placeholder={question.placeholder}
            value={question.value} />
          {this.renderErrors()}
        </div>
      </div>
    );
  }
}
