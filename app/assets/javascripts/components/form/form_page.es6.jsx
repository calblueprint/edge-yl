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
          marginTop: '48px',
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
    var page = this.props.page;
    return (
      <div style={this.styles.container}>
        <div style={this.styles.header}>
          <h1>{page.title}</h1>
        </div>
        {this.renderQuestions()}
      </div>
    );
  }
}
