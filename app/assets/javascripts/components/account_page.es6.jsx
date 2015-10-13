class AccountPage extends Component {

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
        flex: '1',
        position: 'relative',
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
      },
      content: {
        display: 'flex', 
        flexDirection: 'column',
        marginLeft: '236px', 
        position: 'relative',
        display: 'flex',
        width: '712px',
        height: '600px',
        backgroundColor: 'white',
        border: '1px solid',
        borderColor: '#e5e6e9 #dfe0e4 #d0d1d5',
        borderRadius: '3px',
        marginTop: '30px',
        padding: '0px 45px',
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
          handleSidebarClick={this.handleClick.bind(this)} />
        <div style={this.styles.body}>
          <Sidebar shouldShow={this.state.sidebar} />
          <div style={this.styles.content}> 
            <AccountMetadata />
            <AccountInfo />
          </div>
        </div>
      </div>
    );
  }
}

