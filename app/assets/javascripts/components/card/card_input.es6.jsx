class CardInput extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      action: React.PropTypes.func.isRequired,
      margin: React.PropTypes.bool,
      placeholder: React.PropTypes.string.isRequired,
      value: React.PropTypes.string.isRequired,
    };
  }

  static get defaultProps() {
    return {
      margin: true,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {
          display: 'flex',
          alignSelf: 'stretch',
        },
        this.props.margin && { marginTop: '18px' }
      ),
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
    var node = ReactDOM.findDOMNode(this.refs.input);
    node.addEventListener('input', (event) => this.props.action(event));
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.container}>
        <input
          defaultValue={this.props.value}
          ref={'input'}
          style={this.styles.input}
          placeholder={this.props.placeholder}>
        </input>
      </div>
    );
  }
}
