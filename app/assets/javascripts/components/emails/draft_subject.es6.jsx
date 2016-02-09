class DraftSubject extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      draft: React.PropTypes.object.isRequired,
      errors: React.PropTypes.array,
      margin: React.PropTypes.bool,
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
    DraftActions.storeAttribute('subject', event.target.value,
                               this.props.draft.id);
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
        <h6>Subject</h6>
        <input
          defaultValue={this.props.draft.subject}
          placeholder="Subject"
          ref={'input'}
          type="text" />
        {this.renderError()}
      </div>
    );
  }
}
