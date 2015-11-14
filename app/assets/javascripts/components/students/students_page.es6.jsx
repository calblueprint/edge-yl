class StudentsPage extends Component {

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

  static get defaultState() {
    return {
      sidebar: true,
      students: [],
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

  componentDidMount() {
    resolve = (response) => { this.setState({ students: response }) };
    Requester.get(ApiConstants.students.index(this.props.page), resolve);
  }

  toggleSidebar(event) {
    this.setState({ sidebar: !this.state.sidebar });
  }

  changePage() {
    window.location = RouteConstants.students.index(this.props.page + 1);
  }

  render() {
    return (
      <div style={StyleConstants.pages.default}>
        <Header
          toggleSidebar={this.toggleSidebar.bind(this)} />
        <div style={this.styles.container}>
          <Sidebar shouldShow={this.state.sidebar} />
          <div style={this.styles.body}>
            <StudentsFilters />
            <StudentsGrid students={this.state.students} />
            <div>
              <Clickable
                content={'Previous'}
                func={() => this.changePage()} />
              <Clickable
                content={'Next'}
                func={() => this.changePage()} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
