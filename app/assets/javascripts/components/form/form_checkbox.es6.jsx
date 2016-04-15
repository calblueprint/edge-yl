class FormCheckbox extends Component {

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
    var options = this.props.question.options;
    options.map((option) => {
      var node = ReactDOM.findDOMNode(this.refs[option]);
      node.onchange = (event) => {
        var value = event.target.value;
        if (event.target.checked) {
          console.log(value);
        } else {
          console.log(value);
        }
      }
    });
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

  renderOption(option, index) {
    return (
      <div key={index}>
        <input
          ref={option}
          type={'checkbox'}
          value={option} />
        <label>{option}</label>
      </div>
    );
  }

  renderOptions() {
    var options = this.props.question.options;
    return options.map((option, index) => this.renderOption(option, index));
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
          <h6>{this.props.question.title}{this.renderRequired()}</h6>
          {this.renderDescription()}
        </div>
        <div style={StyleConstants.forms.questions.response}>
          {this.renderOptions()}
          {this.renderError()}
        </div>
      </div>
    );
  }
}
