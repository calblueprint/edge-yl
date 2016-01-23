class CardInput extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      action: React.PropTypes.func.isRequired,
      errors: React.PropTypes.array,
      focus: React.PropTypes.bool,
      label: React.PropTypes.string.isRequired,
      margin: React.PropTypes.bool,
      placeholder: React.PropTypes.string,
      type: React.PropTypes.string,
      value: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      errors: [],
      focus: false,
      margin: false,
      placeholder: '',
      type: 'text',
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
          alignSelf: 'stretch',
        },
        this.props.margin && { marginTop: '12px' }
      ),
      error: {
        color: StyleConstants.colors.red,
      },
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentDidMount() {
    var node = ReactDOM.findDOMNode(this.refs.input);
    node.oninput = (event) => this.props.action(event);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderError() {
    var errors = this.props.errors;
    if (errors && errors.length) {
      return (
        <h6 style={this.styles.error}>
          {errors[0]}
        </h6>
      );
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        <h6>{this.props.label}</h6>
        <input
          autoFocus={this.props.focus}
          defaultValue={this.props.value}
          placeholder={this.props.placeholder}
          ref={'input'}
          type={this.props.type} />
        {this.renderError()}
      </div>
    );
  }
}
