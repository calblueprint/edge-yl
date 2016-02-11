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
      page: React.PropTypes.number.isRequired,
      target: React.PropTypes.string.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.pages.wrapper,
        { justifyContent: 'center' },
      ),
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
    FormActions.fetchForm(this.props.target);
  }

  componentWillUnmount() {
    FormStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderPage() {
    var pages = this.state.form.pages;
    if (pages) {
      return <FormPage page={pages[0]} />;
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        {this.renderPage()}
      </div>
    );
  }
}

