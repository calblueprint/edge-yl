class StudentsFilters extends Component {

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
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          display: 'flex',
          padding: '10px',
          marginTop: '12px',
          alignItems: 'center',
        }
      ),
      title: {
        padding: '0px 16px',
      },
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(StudentsStore.getState());
  }

  componentDidMount() {
    StudentsStore.listen(this._listener);
  }

  componentWillUnmount() {
    StudentsStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderFilter(options) {
    return (
      <StudentsFilter
        options={options} />
    );
  }

  renderFilters() {
    return this.state.filters.map((options) => this.renderFilter(options));
  }

  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.title}>
          <h5>{'Filters'}</h5>
        </div>
        {this.renderFilters()}
      </div>
    );
  }
}
