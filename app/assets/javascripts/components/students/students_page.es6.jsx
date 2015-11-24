class StudentsPage extends Component {

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
      page: React.PropTypes.number.isRequired,
    };
  }

  static get defaultProps() {
    return {
      page: 1,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flex: '1',
        paddingTop: '48px',
        paddingLeft: '196px',
      },
      body: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
        paddingLeft: '12px',
        paddingRight: '208px',
        overflow: 'scroll',
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
    StudentsActions.fetchStudents(this.props.page);
  }

  componentWillUnmount() {
    StudentsStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={StyleConstants.pages.default}>
        <Header toggleSidebar={(event) => StudentsActions.toggleSidebar()} />
        <div style={this.styles.container}>
          <Sidebar hidden={this.state.sidebar} />
          <div style={this.styles.body}>
            <StudentsFilters filters={this.state.filters} />
            <StudentsGrid students={this.state.students} />
            <PageNavigator
              route={RouteConstants.students.index}
              pagination={this.state.pagination} />
          </div>
        </div>
      </div>
    );
  }
}
