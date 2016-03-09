class PreviewContainer extends Component {

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
      id: React.PropTypes.string.isRequired,
      target: React.PropTypes.string.isRequired,
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
        width: '712px',
      },
      page: Object.assign(
        {},
        StyleConstants.templates.card,
        {
          padding: '36px',
          marginTop: '12px',
        },
      ),
      wrapper: Object.assign(
        {},
        StyleConstants.pages.wrapper,
        {
          alignItems: 'center',
          flexDirection: 'column',
        },
      ),
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(PreviewStore.getState());
  }

  componentDidMount() {
    PreviewStore.listen(this._listener);
    PreviewActions.fetchForm(this.props.target, this.props.id);
  }

  componentWillUnmount() {
    PreviewStore.unlisten(this._listener);s
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderPage(page) {
    return (
      <PreviewPage
        id={this.props.id}
        key={page.id}
        page={page}
        style={this.styles.page}
        target={this.props.target} />
    );
  }

  renderPages() {
    var pages = this.state.form.pages;
    if (pages) {
      return this.state.form.pages.map((page) => this.renderPage(page));
    }
  }

  render() {
    return (
      <div style={this.styles.wrapper}>
        <div style={this.styles.container}>
          <PreviewHeader />
          {this.renderPages()}
          <PreviewFooter
            id={this.props.id}
            target={this.props.target} />
        </div>
      </div>
    );
  }
}
