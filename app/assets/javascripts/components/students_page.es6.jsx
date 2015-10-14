class StudentsPage extends Component {

  static get defaultState() {
    return { sidebar: true };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        height: '100vh',
      },
      body: {
        display: 'flex',
        flex: '1',
        position: 'relative',
        paddingLeft: '196px',
      },
      placeholder: {
        position: 'relative',
        width: '196px',
      },
      // TODO(Warren): Refactor this style out - might happen
      // when abstracting general Page component out of pages.
      subbody: {
        flex: '1',
        position: 'relative',
        padding: '0px 12px',
      },
    };
  }

  handleClick(event) {
    this.setState({ sidebar: !this.state.sidebar });
  }

  render() {
    return (
      <div style={this.styles.container}>
        <Header
          handleClick={this.handleClick.bind(this)} />
        <div style={this.styles.body}>
          <Sidebar shouldShow={this.state.sidebar} />
          <div style={this.styles.subbody}>
            <StudentsFilters />
            <StudentsGrid />
          </div>
          <div style={this.styles.placeholder}></div>
        </div>
      </div>
    );
  }
}
