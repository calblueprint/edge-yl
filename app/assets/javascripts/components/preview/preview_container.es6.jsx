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
      target: React.PropTypes.string.isRequired,
      uuid: React.PropTypes.string.isRequired,
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
        }
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
    PreviewActions.fetchForm(this.props.target, this.props.uuid);
  }

  componentWillUnmount() {
    PreviewStore.unlisten(this._listener);s
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderFooter() {
    return (
        <PreviewFooter
          target={this.props.target}
          uuid={this.props.uuid} />
    );
  }


  // renderHeader() {
  //   var pages = this.state.form.pages;
  //   if (pages) {
  //     return <PreviewHeader />;
  //   }
  // }

  renderPage(page) {
    return (
      <PreviewPage
        key={page.id}
        style={this.styles.page}
        page={page} />
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
          <PreviewHeader/>
          {this.renderPages()}
          {this.renderFooter()}
        </div>
      </div>
    );
  }
}
