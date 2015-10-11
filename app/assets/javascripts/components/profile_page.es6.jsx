class ProfilePage extends Component {

  static get defaultState() {
    return { sidebar: true };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        width: '100vw',
        height: '100vh',
      },
      body: {
        flex: 1,
        position: 'relative',
        width: '100%',
      },
    };
  }

  handleClick(event) {
    this.setState({ sidebar: !this.state.sidebar });
  }

  render() {
    console.log(this.state.sidebar);
    return (
      <div style={this.styles.container}>
        <Header
          handleSidebarClick={this.handleClick.bind(this)} />
        <div style={this.styles.body}>
          <Sidebar shouldShow={this.state.sidebar} />
          <ProfileGrid />
        </div>
      </div>
    );
  }
}

