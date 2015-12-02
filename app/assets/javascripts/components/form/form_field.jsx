class FormField extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      question: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      question: {},
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
    FormActions.storeResponse(1, question.id, event.target.value);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var question = this.props.question;
    return (
      <div style={this.styles.container}>
        <h5>{question.title}</h5>
        <input
          ref={'container'}
          style={this.styles.input}
          placeholder={question.placeholder}
          value={question.value} />
      </div>
    );
  }
}
