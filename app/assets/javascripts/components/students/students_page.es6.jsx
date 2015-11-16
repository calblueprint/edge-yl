class StudentsPage extends Component {

  constructor(props) {
    super(props);
    this._listener = null;
  }

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
      section: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '24px 0',
      },
      label: {
        padding: '0px 12px',
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

  renderNavigator() {
    var generator = RouteConstants.students.index;
    var page = this.props.page;
    return (
      <div style={this.styles.section}>
        <Clickable
          content={'Previous'}
          func={() => window.location = generator(this.props.page - 1)}
          type={'h6'} />
        <h6 style={this.styles.label}>{'Displaying 10 out of 25 students'}</h6>
        <Clickable
          content={'Next'}
          func={() => window.location = generator(this.props.page + 1)}
          type={'h6'} />
      </div>
    );
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
            {this.renderNavigator()}
          </div>
        </div>
      </div>
    );
  }
}
