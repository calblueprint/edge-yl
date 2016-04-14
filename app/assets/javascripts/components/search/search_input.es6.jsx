class SearchInput extends Component {

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
  // Helpers
  // --------------------------------------------------
  /** Generates dropdown options which link to a result's show view. */
  generateChoice(result) {
    var route;
    var type = result.searchable_type;
    var node = <SearchResult label={type} value={result.content} />;
    if (type === 'Group') {
      route = RouteConstants.groups.show(result.searchable_id);
    } else if (type === 'Email') {
      route = RouteConstants.threads.show(result.searchable_id);
    } else if (type === 'School') {
      route = RouteConstants.schools.show(result.searchable_id);
    } else {
      route = RouteConstants.students.show(result.searchable_id);
    }
    return {
      children: node,
      route: route,
    };
  }

  generateChoices() {
    var results = this.props.results;
    var choices = results.map((result) => this.generateChoice(result));
    var pagination = this.props.pagination;
    var footer = {
      content: `Displaying page ${pagination.current} of ${pagination.limit} total`,
      static: true,
    };
    choices.push(footer);
    return choices;
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
  // Render
  // --------------------------------------------------
  renderInput() {
    return (
      <div style={{ display: 'flex' }}>
        <div style={this.styles.header}>
          <i className={TypeConstants.icons.search} />
        </div>
        <input
          placeholder={'Search for a group, school, or student'}
          ref={'input'}
          style={this.styles.input}
          type={'search'}
          value={this.props.search.query} />
      </div>
    );
  }

  render() {
    return (
      <div style={this.styles.container}>
        {this.renderInput()}
        <SearchResults
          choices={this.generateChoices()}
          pagination={this.props.pagination}
          results={this.props.results}
          search={this.props.search} />
        <PageUnderlay active={this.props.search.active} />
      </div>
    );
  }
}
