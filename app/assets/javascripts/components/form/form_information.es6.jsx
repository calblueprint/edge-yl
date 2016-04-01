class FormInformation extends Component {

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
      container: Object.assign(
        {},
        StyleConstants.forms.questions.container,
        {
          flexFlow: 'column',
        },
      ),
      description: {
        fontWeight: 'normal',
      },
      title: Object.assign(
        {},
        StyleConstants.forms.questions.prompt,
        {
          width: '100%',
        },
      ),
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
  renderDropdown() {
    var question = this.props.question;
    return (
      <DropdownButton
        choices={this.generateChoices()}
        value={question.value} />
    );
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
      <div style={this.styles.container}>
        <div style={this.styles.title}>
          <h6>{this.props.question.title}{this.renderRequired()}</h6>
        </div>
        <div>
          <p>{this.props.question.description}</p>
        </div>
      </div>
    );
  }
}
