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
        <Header
          toggleSidebar={() => this.toggleSidebar())} />
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
