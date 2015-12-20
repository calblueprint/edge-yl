class CardInput extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      action: React.PropTypes.func.isRequired,
      errors: React.PropTypes.array,
      focus: React.PropTypes.bool,
      margin: React.PropTypes.bool,
      placeholder: React.PropTypes.string.isRequired,
      value: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      errors: [],
      focus: false,
      margin: true,
      value: '',
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
          alignSelf: 'stretch',
        },
        this.props.margin && { marginTop: '18px' }
      ),
      errors: {
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
  renderErrors() {
    var errors = this.props.errors;
    if (errors && errors.length) {
      return (
        <h6 style={this.styles.errors}>
          {errors[0]}
        </h6>
      );
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        <input
          autoFocus={this.props.focus}
          defaultValue={this.props.value}
          placeholder={this.props.placeholder}
          ref={'input'}
          style={this.styles.input} />
        {this.renderErrors()}
      </div>
    );
  }
}
