class DraftContent extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      errors: React.PropTypes.array,
      margin: React.PropTypes.bool,
      value: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      errors: [],
      focus: false,
      margin: false,
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
    node.oninput = (event) =>
        DraftActions.storeAttribute('content', event.target.value);
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
        <h6>Content</h6>
        <textarea
          defaultValue={this.props.value}
          rows="10"
          ref={'input'}
          placeholder="Start typing" />
        {this.renderError()}
      </div>
    );
  }
}
