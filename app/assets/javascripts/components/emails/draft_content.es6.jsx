class DraftContent extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      draft: React.PropTypes.object.isRequired,
      errors: React.PropTypes.array,
    };
  }

  static get defaultProps() {
    return {
      errors: [],
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        alignSelf: 'stretch',
      },
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
    node.oninput = (event) => {
      DraftActions.storeAttribute(
        'content',
        event.target.value,
        this.props.draft.id,
      );
    };
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
          defaultValue={this.props.draft.subject}
          ref={'input'}
          rows={'10'}
          placeholder="Start typing" />
        {this.renderError()}
      </div>
    );
  }
}
