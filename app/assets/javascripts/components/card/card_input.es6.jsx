class CardInput extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      action: React.PropTypes.func.isRequired,
      error: React.PropTypes.string,
      margin: React.PropTypes.bool,
      placeholder: React.PropTypes.string.isRequired,
      value: React.PropTypes.string.isRequired,
    };
  }

  static get defaultProps() {
    return {
      error: '',
      margin: true,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        {
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
        },
        this.props.margin && { marginTop: '18px' }
      ),
      error: {
        marginTop: '12px',
        color: StyleConstants.colors.red,
      },
      input: {
        alignSelf: 'stretch',
        padding: '8px',
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
  renderError() {
    if (this.props.error) {
      return (
        <h6 style={this.styles.error}>
          {this.props.error}
        </h6>
      );
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        <input
          defaultValue={this.props.value}
          placeholder={this.props.placeholder}
          ref={'input'}
          style={this.styles.input} />
        {this.renderError()}
      </div>
    );
  }
}
