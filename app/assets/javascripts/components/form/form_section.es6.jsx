class FormSection extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      section: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
      },
      header: {
        display: 'flex',
        alignItems: 'center',
      },
      line: {
        flex: '1',
        height: '1px',
        marginLeft: '10px',
        borderTop: 'solid 1px',
        borderColor: StyleConstants.colors.gray,
      },
      section: {
        display: 'flex',
        flexDirection: 'column',
        padding: '24px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderQuestion(question) {
    return (
      <FormInput
        key={question.id}
        question={question} />
    );
  }

  renderQuestions() {
    var questions = this.props.section.questions;
    if (questions) {
      return questions.map((question) => this.renderQuestion(question));
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.header}>
          <h4>{this.props.section.title}</h4>
          <span style={this.styles.line} />
        </div>
        <div style={this.styles.section}>
          {this.renderQuestions()}
        </div>
      </div>
    );
  }
}
