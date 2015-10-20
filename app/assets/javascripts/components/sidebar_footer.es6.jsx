class SidebarFooter extends Component {

  static get defaultState() {
    return {};
  }

  get styles() {
    return {
      text: {
        height: '100%',
        paddingRight: '5px',
      },
      img: {
        position:'relative',
        maxHeight: '34px',
        maxWidth: '34px',
        width: 'auto',
      },
    };
  }

  get clickableStyles() {
    return { 
      default: { 
        display: 'flex',
        flex: '1', 
        flexDirection: 'row',
        position: 'relative',
        padding: '20px',
        marginLeft: '14px',
        alignItems: 'center',
      }
    };
  }

  render() {
    return (
      <Clickable
         styles={this.clickableStyles}
         route={RouteConstants.students.index}> 
        <span style={this.styles.text}>Powered by</span>
        <img
          src='https://avatars3.githubusercontent.com/u/2729578?v=3&s=200'
          style={this.styles.img}/>
      </Clickable>
    );
  }
}

