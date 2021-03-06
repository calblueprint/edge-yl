class CheckinSearch extends Component {
  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
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
        marginTop: '12px',
      },
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleFocus(event) {
    CheckinActions.storeSearch(true);
  }

  handleInput(event) {
    CheckinActions.storeSearch(
      true,
      this.props.conference.id,
      event.target.value,
    );
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateChoice(result) {
    var action = () => CheckinActions.fetchStudent(result.searchable_id);
    var node = <SearchResult label={'student'} value={result.content} />;
    return {
      action: action,
      children: node,
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
          placeholder={'Search for a student to check in'}
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
