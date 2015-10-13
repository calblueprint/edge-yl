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
        height: '100vh',
      },
      body: {
        display: 'flex',
        flex: '1',
        position: 'relative',
        paddingLeft: '196px',
      },
      content: {
        display: 'flex', 
        flexDirection: 'column',
        flex: '1',
        position: 'relative',
        padding: '0 12px',
        height: '600px',
        backgroundColor: 'white',
        border: '1px solid',
        borderColor: '#e5e6e9 #dfe0e4 #d0d1d5',
        borderRadius: '3px',
      },
      placeholder: {
        position: 'relative',
        width: '196px',
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
          <div style={this.styles.placeholder}></div>
        </div>
      </div>
    );
  }
}

