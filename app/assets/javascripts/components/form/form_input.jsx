class FormInput extends Component {

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
        alignItems: 'center',
        marginBottom: '18px',
      },
      errors: {
        color: StyleConstants.colors.red,
      },
      input: {
        flex: '1',
        padding: '8px',
        marginLeft: '24px',
        fontSize: StyleConstants.fonts.sizes.smallest,
      },
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentDidMount() {
    var node = ReactDOM.findDOMNode(this.refs.container);
    node.addEventListener('input', (event) => this.handleChange(event));
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleChange(event) {
    var question = this.props.question;
    FormActions.storeResponse(
      question.section_id,
      question.id,
      event.target.value
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderErrors() {
    var errors = this.props.question.errors;
    if (errors && errors.length) {
      return (
        <h6 style={this.styles.errors}>
          {errors[0]}
        </h6>
      );
    }
  }

  render() {
    var question = this.props.question;
    return (
      <div style={this.styles.container}>
        <h5>{question.title}</h5>
        <h6>{`Required: ${question.is_required}`}</h6>
        <input
          ref={'container'}
          style={this.styles.input}
          placeholder={question.placeholder}
          value={question.value} />
        {this.renderErrors()}
      </div>
    );
  }
}
