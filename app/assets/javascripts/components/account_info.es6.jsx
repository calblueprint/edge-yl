class AccountInfo extends Component {

  get styles() {
    return {
      container: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        width: '100%',
        borderBottom: 'solid #D6D6D6 3px',
      },
      email: {
        display: 'flex',
        flex: '1',
        alignSelf: 'flex-start',
        fontSize: '16px',
      }, 
      password: {
        display: 'flex',
        flex: '1',
        alignSelf: 'flex-start',
        fontSize: '16px',
      },
      row: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        width: '100%',
        paddingTop: '20px',
        paddingBottom:'14px', 
      },
    };
  }

  get buttonStyles() {
    return {
      default: {
        display: 'flex',
        alignSelf: 'flex-end',
        position: 'relative',
        color: 'black',
        fontColor: 'black',
        fontSize: '16',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <div style= {this.styles.row}>
          <span style={this.styles.email} >Email: soniayangsux@edgeyl.org</span>
          <Clickable
            content={'Change'}
            route={Routes.pages.profile}
            styles={this.buttonStyles} />   
        </div>
        <div style= {this.styles.row}>
          <span style={this.styles.password}>Password: **********</span>
          <Clickable
            content={'Change'}
            route={Routes.pages.profile}
            styles={this.buttonStyles} />        
        </div>     
      </div>         
    );
  }
}

