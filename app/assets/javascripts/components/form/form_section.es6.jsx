class FormSection extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  // TODO(Sonia): Add a 'required' proptype
  static get propTypes() {
    return {
      section: React.PropTypes.object.isRequired,
      updateValue: React.PropTypes.func.isRequired,
    };
  }

  static get defaultProps() {
    return {
      section: {},
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
        flexFlow: 'row',
        alignItems: 'center',
      },
      line: {
        flex: '1',
        height: '1px',
        marginLeft: '10px',
        borderTop: 'solid gray 1px',
      },
      questions: {
        padding: '24px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderQuestion(question, index) {
    return (
      <FormField
        key={index}
        placeholder={null}
        title={question.label} />
    );
  }

  renderQuestions() {
    var questions = this.props.section.questions;
    if (questions) {
      return questions.map((question, index) => this.renderQuestion(question, index));
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.header}>
          <h4>{this.props.section.title}</h4>
          <span style={this.styles.line} />
        </div>
        <div style={this.styles.questions}>
          {this.renderQuestions()}
        </div>
      </div>
    );
  }
}
