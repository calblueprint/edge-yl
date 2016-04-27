class StudentSubmissionPage extends Component {

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
          display: 'flex',
          flexFlow: 'column',
          padding: '36px',
          marginTop: '12px',
        },
      ),
      header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '12px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderQuestion(question) {
    if (question.style !== TypeConstants.questions.information) {
      var questions = this.props.page.questions;
      var enablers = [];
      if (question.enabler_key) {
        enablers = questions.filter((q) => {
          return question.enabler_key === q.key &&
                 question.enabler_value.indexOf(q.value) !== -1;
        });
      }
      if (!question.enabler_key || enablers.length > 0) {
        return (
          <PreviewAttribute
            key={question.key}
            question={question} />
        );
      }
    }
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
        <div style={this.styles.header}>
          <h4>{this.props.page.title}</h4>
        </div>
        {this.renderQuestions()}
      </div>
    );
  }
}
