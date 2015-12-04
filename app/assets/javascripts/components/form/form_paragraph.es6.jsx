class FormParagraph extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      title: React.PropTypes.string.isRequired,
      placeholder: React.PropTypes.string,
      value: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {};
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'left',
        marginBottom: '20px',
      },
      label: {
        paddingBottom: '10px',
        fontSize: StyleConstants.fonts.sizes.smaller,
      },
      input: {
        flex: '1',
        padding: '8px',
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
    var node = ReactDOM.findDOMNode(this.refs.container);
    // TODO(Max): Finish this method definition
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.container}>
        <label style={this.styles.label}>{this.props.title}</label>
        <textarea
          ref={'container'}
          rows={'8'}
          cols={'50'}
          style={this.styles.input}
          placeholder={this.props.placeholder}>
        </textarea>
      </div>
    )
  }
}
