class FormDropdown extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      question: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '18px',
      },
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateChoice(choice) {
    return {
      action: () => this.storeResponse(choice),
      content: choice,
    };
  }

  generateChoices() {
    var options = this.props.question.options;
    return options.map((choice) => this.generateChoice(choice));
  }

  storeResponse(choice) {
    var question = this.props.question;
    FormActions.storeResponse(
      question.page_id,
      question.id,
      choice,
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
    var question = this.props.question;
    return (
      <div style={StyleConstants.forms.questions.container}>
        <div style={StyleConstants.forms.questions.prompt}>
          <h6>{question.title}{this.renderRequired()}</h6>
        </div>
        <div style={StyleConstants.forms.questions.response}>
          <DropdownButton
            choices={this.generateChoices()}
            value={question.value} />
          {this.renderErrors()}
        </div>
      </div>
    );
  }
}
