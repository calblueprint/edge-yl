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
    // var node = ReactDOM.findDOMNode(this.refs.container);
    // node.oninput = (event) => this.handleChange(event);
    //     categories.map((category) => {
    //   var node = ReactDOM.findDOMNode(this.refs[category]);
    //   node.onchange = (event) => {
    //     var value = event.target.value;
    //     var creationCategories = this.state.creationCategories;
    //     if (event.target.checked) {
    //       if (creationCategories.indexOf(value) === -1) {
    //         creationCategories.push(value);
    //         this.setState({ creationCategories: creationCategories });
    //       }
    //     } else {
    //       creationCategories = creationCategories.filter((category) => category !== value);
    //       this.setState({ creationCategories: creationCategories });
    //     }
    //   }
    // });
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
          type={"checkbox"}
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
