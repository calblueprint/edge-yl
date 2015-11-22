class HeaderSearch extends Component {

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
        height: '30px',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '1px',
        boxSizing: 'border-box',
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
          padding: '12px 0px',
          paddingLeft: '0px',
          margin: '0px 12px',
          transition: 'padding 0.25s ease-out',
        },
        hover: {
          paddingLeft: '8px',
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
          left: '0px',
        },
        (!this.props.search.active ||
         !this.props.results.length) &&
         { display: 'none' }
      ),
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleBlur(event) {
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
  componentDidMount() {
    var input = ReactDOM.findDOMNode(this.refs.input);
    input.addEventListener('blur', (event) => this.handleBlur(event));
    input.addEventListener('focus', (event) => this.handleFocus(event));
    input.addEventListener('input', (event) => this.handleInput(event));
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
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
            value={this.props.search.query}>
          </input>
        </div>
        <Dropdown
          options={this.props.results}
          styles={this.dropdownStyles} />
      </div>
    );
  }
}
