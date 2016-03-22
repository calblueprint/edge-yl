class FormContainer extends Component {

  // --------------------------------------------------
  // Setup
  // --------------------------------------------------
  constructor(props) {
    super(props);
    this._listener = (state) => this.setState(state);
  }

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      id: React.PropTypes.string,
      page: React.PropTypes.number.isRequired,
      target: React.PropTypes.string.isRequired,
    };
  }

  static get defaultProps() {
    return {
      id: null,
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(FormStore.getState());
  }

  componentDidMount() {
    FormStore.listen(this._listener);
    FormActions.fetchForm(this.props.target, this.props.page, this.props.id);
  }

  componentWillUnmount() {
    FormStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderFooter() {
    var pages = this.state.form.pages;
    if (pages) {
      return (
        <FormFooter
          errors={this.state.errors}
          id={this.props.id}
          page={pages[this.props.page - 1]}
          target={this.props.target} />
      );
    }
  }

  renderHeader() {
    var pages = this.state.form.pages;
    if (pages) {
      return <FormHeader page={pages[this.props.page - 1]} />;
    }
  }

  renderPage() {
    var pages = this.state.form.pages;
    if (pages) {
      return <FormPage page={pages[this.props.page - 1]} />;
    }
  }

  render() {
    return (
      <div style={StyleConstants.wrappers.center}>
        <div style={StyleConstants.pages.center}>
          {this.renderHeader()}
          {this.renderPage()}
          {this.renderFooter()}
        </div>
      </div>
    );
  }
}
