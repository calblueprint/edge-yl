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
        flex: 1,
        position: 'relative',
        display: 'flex', 
        flexDirection: 'row',
  			justifyContent: 'center',
        width: '100%',
      },
      content: {
      	marginLeft: '236px', 
      	position: 'relative',
      	display: 'flex',
      	width: '712px',
      	height: '100%',
      	//border: '1px solid red',
      }
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
          <div style = {this.styles.content}> 
          	<AccountMetadata />

          </div>
        </div>
      </div>
    );
  }
}

