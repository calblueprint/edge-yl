class StudentsPage extends Component {

  constructor(props) {
    super(props);
    this._listener = null;
  }

  static get propTypes() {
    return {
      limit: React.PropTypes.number.isRequired,
      page: React.PropTypes.number.isRequired,
    };
  }

  static get defaultProps() {
    return {
      limit: 1,
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

  renderNext() {
    var props = this.props;
    if (props.page < props.limit) {
      return (
        <Clickable
          content={'Next'}
          func={() => window.location = RouteConstants.students.index(props.page + 1)}
          type={'h6'} />
      );
    }
  }

  renderPrevious() {
    var props = this.props;
    if (props.page > 1) {
      return (
        <Clickable
          content={'Previous'}
          func={() => window.location = RouteConstants.students.index(props.page - 1)}
          type={'h6'} />
      );
    }
  }

  renderNavigator() {
    console.log(this.props.page);
    return (
      <div style={this.styles.section}>
        {this.renderPrevious()}
        <h6 style={this.styles.label}>{'Displaying 10 out of 25 students'}</h6>
        {this.renderNext()}
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
