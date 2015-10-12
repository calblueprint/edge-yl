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
        fontSize: '16px',
        alignSelf: 'flex-start',
        flex: '1',
      }, 
      password: {
        display: 'flex',
        fontSize: '16px',       
        alignSelf: 'flex-start',
        flex: '1',
      },
      row: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        padding: '15px', 
        width: '100%',
      },
    };
  }

  get buttonStyle() {
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
            styles={this.buttonStyle} />   
        </div>
        <div style= {this.styles.row}>
          <span style={this.styles.password}>Password: ********** </span>
          <Clickable
            content={'Change'}
            route={Routes.pages.profile}
            styles={this.buttonStyle} />        
        </div>     
      </div>         
    );
  }
}

