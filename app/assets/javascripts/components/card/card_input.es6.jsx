class CardInput extends Component {

  static get propTypes() {
    return {
      action: React.PropTypes.func.isRequired,
      placeholder: React.PropTypes.string.isRequired,
      value: React.PropTypes.string.isRequired,
    };
  }

  static get defaultProps() {
    return {
      action: null,
      placeholder: 'First Name',
      value: '',
    };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        alignSelf: 'stretch',
        padding: '0px 12px',
        marginTop: '18px',
      },
      input: {
        flex: '1',
        padding: '8px',
        fontSize: StyleConstants.fonts.sizes.smallest,
      },
    };
  }

  componentDidMount() {
    var node = ReactDOM.findDOMNode(this.refs.input);
    node.addEventListener('input', (event) => this.handleInput(event));
  }

  handleInput(event) {
    this.props.action(event);
  }

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
