class FormParagraph extends Component {

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

  handleChange(event) {
    var node = ReactDOM.findDOMNode(this.refs.container);
    // TODO(Max): Finish this method definition
  }

  componentDidMount() {
    var node = ReactDOM.findDOMNode(this.refs.container);
    node.addEventListener('input', (event) => this.handleChange());
  }

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
