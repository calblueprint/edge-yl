class StudentSearchInput extends SearchInput {
  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      pagination: React.PropTypes.object.isRequired,
      conferenceId: React.PropTypes.number.isRequired,
      groupId: React.PropTypes.number.isRequired,
      results: React.PropTypes.array.isRequired,
      savedSearch: React.PropTypes.object.isRequired,
      search: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleFocus(event) {
    GroupActions.storeSearch(true);
  }

  handleInput(event) {
    GroupActions.storeSearch(true,
                             this.props.conferenceId,
                             this.props.groupId,
                             event.target.value);
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateChoice(result) {
    var action = () => GroupActions.storeStudentSearch(result);
    var node = <SearchResult label={"student"} value={result.content} />;
    return {
      children: node,
      action: action,
    };
  }

  generateChoices() {
    var results = this.props.results;
    var choices = results.map((result) => this.generateChoice(result));
    return choices;
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentDidMount() {
    var input = ReactDOM.findDOMNode(this.refs.input);
    input.onfocus = (event) => this.handleFocus(event);
    input.oninput = (event) => this.handleInput(event);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderInput() {
    return (
      <div style={{ display: 'flex' }}>
        <input
          placeholder={'Search for a student'}
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
      </div>
    );
  }
}
