class HeaderSearch extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      pagination: React.PropTypes.object.isRequired,
      results: React.PropTypes.array.isRequired,
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
        flex: '1',
        height: '30px',
      },
      input: {
        zIndex: StyleConstants.planes.nine,
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
      option: {
        display: 'flex',
        flexFlow: 'column',
      },
      section: {
        display: 'flex',
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
        StyleConstants.containers.card,
        {
          top: '4px',
          left: '0px',
          zIndex: StyleConstants.planes.nine,
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
  // Helpers
  // --------------------------------------------------
  generateResult(result, index) {
    var route;
    var type = result.searchable_type;
    var node = (
      <div style={this.styles.option}>
        <h6>{type}</h6>
        <h6>{result.content}</h6>
      </div>
    );
    if (type === 'School') {
      route = RouteConstants.schools.show(result.searchable_id);
    } else {
      route = RouteConstants.students.show(result.searchable_id);
    }
    return {
      children: node,
      route: route,
    };
  }

  generateResults() {
    var results = this.props.results.map((result) => this.generateResult(result));
    var pagination = this.props.pagination;
    var footer = {
      content: `Displaying page ${pagination.current} of ${pagination.limit} total`,
      static: true,
    };
    results.push(footer);
    return results;
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.section}>
          <div style={this.styles.logo}>
            <i className={TypeConstants.icons.search} />
          </div>
          <input
            placeholder={'Search for a school or student'}
            ref={'input'}
            style={this.styles.input}
            type={'search'}
            value={this.props.search.query}>
          </input>
        </div>
        <Dropdown
          options={this.generateResults()}
          styles={this.dropdownStyles} />
        <PageUnderlay active={this.props.search.active} />
      </div>
    );
  }
}
