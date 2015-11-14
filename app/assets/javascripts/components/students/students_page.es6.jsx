class StudentsPage extends Component {

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
    StudentsStore.listen((state) => this.setState(state));
    StudentsActions.fetchStudents();
  }

  toggleSidebar(event) {
    this.setState({ sidebar: !this.state.sidebar });
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
          </div>
        </div>
      </div>
    );
  }
}
