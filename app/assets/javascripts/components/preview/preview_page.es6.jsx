class PreviewPage extends Component {

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
          padding: '36px',
          marginTop: '12px',
        },
      ),
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderQuestion(question) {
    return (
      <PreviewAttribute
        key={question.key}
        question={question} />
    );
  }

  renderQuestions() {
    var questions = this.props.page.questions;
    if (questions) {
      return questions.map((question) => this.renderQuestion(question));
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        <h4>{this.props.page.title}</h4>
        {this.renderQuestions()}
      </div>
    );
  }
}
