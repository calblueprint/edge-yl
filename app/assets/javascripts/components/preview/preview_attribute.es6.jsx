class PreviewAttribute extends Component {

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
        marginTop: '12px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderValue() {
    var question = this.props.question;
    var value = question.value ? question.value : 'n/a';
    return <p>{value}</p>;
  }

  render() {
    return (
      <div style={this.styles.container}>
        <div style={StyleConstants.forms.questions.prompt.preview}>
          <h6>{this.props.question.title}</h6>
        </div>
        <div style={StyleConstants.forms.questions.response.preview}>
          {this.renderValue()}
        </div>
      </div>
    );
  }
}
