class SchoolsPage extends Component {

  static get defaultState() {
    return {
      sidebar: true,
      schools: [],
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
    resolve = (response) => { this.setState({ schools: response }) };
    Requester.get(ApiConstants.schools.index, resolve);
  }

  toggleSidebar(event) {
    this.setState({ sidebar: !this.state.sidebar });
  }

  render() {
    return (
      <div style={StyleConstants.pages.default}>
        <Header
          toggleSidebar={this.toggleSidebar.bind(this)} />
        <div style={this.styles.container}>
          <Sidebar shouldShow={this.state.sidebar} />
          <div style={this.styles.body}>
            <SchoolsGrid schools={this.state.schools} />
          </div>
        </div>
      </div>
    );
  }
}
