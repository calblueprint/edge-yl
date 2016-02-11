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
          width: '712px',
          padding: '36px',
          margin: '48px 0px',
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
    switch (question.style) {
      case 'dropdown':
        return (
          <FormDropdown
            key={question.id}
            question={question} />
        );
      case 'input':
        return (
          <FormInput
            key={question.id}
            question={question} />
        );
    }
  }

  renderQuestions() {
    var questions = this.props.page.questions;
    return questions.map((question) => this.renderQuestion(question));
  }

  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.header}>
          <h1>{this.props.page.title}</h1>
        </div>
        {this.renderQuestions()}
        <FormButton
          action={() => FormActions.createObject(this.props.form)}
          content={'Submit'} />
      </div>
    );
  }
}
