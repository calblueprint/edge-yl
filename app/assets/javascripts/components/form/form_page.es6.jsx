class FormPage extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      page: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.templates.card,
        {
          padding: '36px 36px 24px',
          marginTop: '12px',
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
  renderQuestion(question) {
    var render = true;
    if (question.enabler_key) {
      this.props.page.questions.map((element) => {
        if (question.enabler_key === element.key &&
            question.enabler_value !== element.value) {
          render = false;
        }
      });
    }
    if (render) {
      switch (question.style) {
        case TypeConstants.questions.dropdown:
          return (
            <FormDropdown
              key={question.id}
              question={question} />
          );
        case TypeConstants.questions.information:
          return (
            <FormInformation
              key={question.id}
              question={question} />
          );
        case TypeConstants.questions.input:
          return (
            <FormInput
              key={question.id}
              question={question} />
          );
        case TypeConstants.questions.textarea:
          return (
            <FormTextarea
              key={question.id}
              question={question} />
          );
        case TypeConstants.questions.waiver:
          return (
            <FormWaiver
              key={question.id}
              question={question} />
          );
      }
    }
  }

  renderQuestions() {
    var questions = this.props.page.questions;
    return questions.map((question) => this.renderQuestion(question));
  }

  render() {
    var page = this.props.page;
    return (
      <form style={this.styles.container}>
        {this.renderQuestions()}
      </form>
    );
  }
}
