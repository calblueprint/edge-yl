class HeaderSearch extends Component {

  // --------------------------------------------------
  // Setup
  // --------------------------------------------------
  constructor(props) {
    super(props);
    this._listener = (state) => this.setState(state);
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
        height: '30px',
      },
      input: {
        flex: '1',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '1px',
      },
      logo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '48px',
        backgroundColor: StyleConstants.colors.indigo,
        borderRadius: '1px',
        color: StyleConstants.colors.white,
      },
      section: {
        display: 'flex',
        flex: '1',
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '64px',
        backgroundColor: StyleConstants.colors.indigo,
        borderRadius: '1px',
        color: StyleConstants.colors.white,
      },
      hover: {
        backgroundColor: StyleConstants.colors.white,
      },
    };
  }

  get dropdownStyles() {
    return {
      child: {
        default: {
          flex: '1',
          padding: '12px',
        },
        hover: {
          backgroundColor: StyleConstants.colors.turquoise,
        },
      },
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          display: 'flex',
          flexFlow: 'column',
          zIndex: StyleConstants.planes.two,
          top: '4px',
          left: '48px',
          width: '684px',
        }
      ),
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleBlur(event) {
    // console.log('hello');
    HeaderActions.storeSearch(false);
  }

  handleFocus(event) {
    HeaderActions.storeSearch(true);
  }

  handleInput(event) {
    HeaderActions.storeSearch(true, event.target.value);
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(HeaderStore.getState());
  }

  componentDidMount() {
    HeaderStore.listen(this._listener);
    var input = ReactDOM.findDOMNode(this.refs.input);
    // input.addEventListener('blur', (event) => this.handleBlur(event));
    // input.addEventListener('focus', (event) => this.handleFocus(event));
    // input.addEventListener('input', (event) => this.handleInput(event));
  }

  componentWillUnmount() {
    HeaderStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderResults() {
    var results = [
      { content: 'Result 1' },
      { content: 'Result 2' },
    ];
    if (this.state.search.active) {
      return (
        <Dropdown
          options={results}
          styles={this.dropdownStyles} />
      );
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.section}>
          <div style={this.styles.logo}>
            <i className={'fa fa-search fa-1x'} />
          </div>
          <input
            placeholder={'Search for a school or student'}
            ref={'input'}
            style={this.styles.input}
            value={this.state.search.query}>
          </input>
        </div>
        {this.renderResults()}
      </div>
    );
  }
}
