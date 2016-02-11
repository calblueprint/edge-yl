class FormParagraph extends Component {

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
      required: {
        paddingLeft: '4px',
        color: StyleConstants.colors.red,
      },
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentDidMount() {
    var node = ReactDOM.findDOMNode(this.refs.container);
    node.oninput = (event) => this.handleChange(event);
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleChange(event) {
    var node = ReactDOM.findDOMNode(this.refs.container);
    // TODO(Max): Finish this method definition
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderRequired() {
    if (this.props.question.is_required) {
      return <h6 style={this.styles.required}>{'*'}</h6>;
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        <h5>{question.title}</h5>
        {this.renderRequired()}
        <textarea
          cols={'50'}
          placeholder={this.props.placeholder}
          ref={'container'}
          rows={'10'} />
      </div>
    )
  }
}
