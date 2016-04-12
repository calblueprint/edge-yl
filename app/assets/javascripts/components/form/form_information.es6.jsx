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
      title: Object.assign(
        {},
        StyleConstants.forms.questions.prompt,
        {
          width: '100%',
        },
      ),
    };
  }

  unescapeHTML(html) {
    var escapeEl = document.createElement('textarea');
    escapeEl.innerHTML = html;
    return escapeEl;
}
  // --------------------------------------------------
  // Render
  // --------------------------------------------------
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
          <h5>{this.props.question.title}{this.renderRequired()}</h5>
        </div>
        <p dangerouslySetInnerHTML={{__html: this.props.question.description}}></p>
      </div>
    );
  }
}
