class SidebarFooter extends Component {

  get styles() {
    return {
      container: {
        display: 'flex',
        position: 'relative',
        padding: '20px',
        marginLeft: '14px',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        paddingRight: '5px',
      },
      image: {
       height: '100%',
       width: '100%',
      },
    };
  }

  get clickableStyles() {
    return { 
      default: { 
        maxHeight: '34px',
        maxWidth: '34px',
        transition: 'transform 0.5s ease-out',
      },
      hover: {
        transform: 'rotate(360deg)',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <span style={this.styles.text}>Powered by</span>
        <Clickable
          styles={this.clickableStyles}
          route={RouteConstants.students.index}>
          <img 
            src='https://avatars3.githubusercontent.com/u/2729578?v=3&s=200'
            style={this.styles.image}/>
        </Clickable>
      </div>
    );
  }
}

