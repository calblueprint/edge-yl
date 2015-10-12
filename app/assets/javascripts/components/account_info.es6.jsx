class AccountInfo extends Component {

  get styles() {
    return {
      container: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        alignItems: 'center',
        width: '100%',
        borderBottom: 'solid #D6D6D6 3px',
      },
      email: {
        display: 'flex',
        paddingTop: '24px',
        paddingBottom:'16px',
        fontSize: '16px',
        alignSelf: 'flex-start',
        flex: '1',
      }, 
      password: {
        display: 'flex',
        fontSize: '16px',
        paddingBottom: '20px',
        alignSelf: 'flex-start',
        flex: '1',
      },
    };
  }

  get titleStyle() {
    return {
      default: {
        position: 'relative',
        color: 'white',
        paddingRight: '16px',
        fontColor: 'white',
        fontSize: '24px',
      },
    };
  }
  render() {
    return (
      <div style={this.styles.container}>
        <span style={this.styles.email} >Email: soniayang@edgeyl.org</span>
        <span style={this.styles.password}>Password: ********** </span>
        <Clickable
          content={'CHANGE'}
          route={Routes.pages.login}
          styles={this.titleStyle} />      
      </div>
    );
  }
}

