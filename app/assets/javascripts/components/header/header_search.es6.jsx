class HeaderSearch extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      pagination: React.PropTypes.object.isRequired,
      results: React.PropTypes.array.isRequired,
      search: React.PropTypes.object.isRequired,
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
      header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '48px',
        backgroundColor: StyleConstants.colors.indigo,
        borderRadius: '1px',
        color: StyleConstants.colors.white,
      },
      input: {
        zIndex: StyleConstants.planes.nine,
        height: '30px',
        border: 'none',
        borderRadius: '1px',
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
          paddingLeft: '4px',
        },
      },
      container: Object.assign(
        {},
        StyleConstants.containers.card,
        {
          zIndex: StyleConstants.planes.nine,
          marginTop: '16px',
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
    input.onblur = (event) => this.handleBlur(event);
    input.onfocus = (event) => this.handleFocus(event);
    input.oninput = (event) => this.handleInput(event);
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateOption(result) {
    var route;
    var type = result.searchable_type;
    var node = (
      <div>
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

  generateOptions() {
    var results = this.props.results;
    var options = results.map((result) => this.generateOption(result));
    var pagination = this.props.pagination;
    var footer = {
      content: `Displaying page ${pagination.current} of ${pagination.limit} total`,
      static: true,
    };
    options.push(footer);
    return options;
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.container}>
        <div style={{ display: 'flex' }}>
          <div style={this.styles.header}>
            <i className={TypeConstants.icons.search} />
          </div>
          <input
            placeholder={'Search for a school or student'}
            ref={'input'}
            style={this.styles.input}
            type={'search'}
            value={this.props.search.query} />
        </div>
        <Dropdown
          options={this.generateOptions()}
          styles={this.dropdownStyles} />
        <PageUnderlay active={this.props.search.active} />
      </div>
    );
  }
}
