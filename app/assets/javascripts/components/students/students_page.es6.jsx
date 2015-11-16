class StudentsPage extends Component {

  constructor(props) {
    super(props);
    this._listener = null;
  }

  static get propTypes() {
    return {
      pagination: React.PropTypes.shape({
        current: React.PropTypes.number.isRequired,
        limit: React.PropTypes.number.isRequired,
        per: React.PropTypes.number.isRequired,
      }).isRequired,
    };
  }

  static get defaultProps() {
    return {
      pagination: {
        current: 1,
        limit: 1,
        per: 10,
      },
    };
  }

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

  componentWillMount() {
    this.setState(StudentsStore.getState());
  }

  componentDidMount() {
    this._listener = StudentsStore.listen((state) => this.setState(state));
    StudentsActions.fetchStudents(this.props.page);
  }

  componentWillUnmount() {
    StudentsStore.unlisten(this._listener);
  }

  toggleSidebar(event) {
    StudentsActions.toggleSidebar(!this.state.sidebar);
  }

  render() {
    return (
      <div style={StyleConstants.pages.default}>
        <Header toggleSidebar={(event) => this.toggleSidebar(event)} />
        <div style={this.styles.container}>
          <Sidebar shouldShow={this.state.sidebar} />
          <div style={this.styles.body}>
            <StudentsFilters />
            <StudentsGrid students={this.state.students} />
            <PageNavigator
              route={RouteConstants.students.index}
              {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}
