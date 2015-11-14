class FormField extends Component {

  static get propTypes() {
    return {
      title: React.PropTypes.string.isRequired,
      placeholder: React.PropTypes.string.isRequired,
      updateValue: React.PropTypes.func.isRequired,
      value: React.PropTypes.string.isRequired,
    };
  }

  static get defaultProps() {
    return {};
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '18px',
      },
      label: {
        paddingRight: '24px',
        fontSize: StyleConstants.fonts.sizes.smaller,
      },
      input: {
        flex: '1',
        padding: '8px',
        fontSize: StyleConstants.fonts.sizes.smallest,
      },
    };
  }

  handleChange(event) {
    this.props.updateValue(event);
  }

  componentDidMount() {
    var node = ReactDOM.findDOMNode(this.refs.container);
    node.addEventListener('input', this.handleChange.bind(this));
  }

  render() {
    return (
      <div style={this.styles.container}>
        <label style={this.styles.label}>{this.props.title}</label>
        <input
          ref={'container'}
          style={this.styles.input}
          placeholder={this.props.placeholder}
          value={this.props.value}>
        </input>
      </div>
    );
  }
}
