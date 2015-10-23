class ProfileOptions extends Component {

  get styles() {
    return {
      container: {
        position: 'relative',
        padding: '24px',
        marginTop: '2%',
        backgroundColor: 'white',
        border: '1px solid',
        borderColor: '#e5e6e9 #dfe0e4 #d0d1d5',
        borderRadius: '3px',
      },
      field: {
        flex: '1',
        position: 'relative',
        alignSelf: 'flex-start',
        fontSize: '16px',
      }, 
      row: {
        display: 'flex',
        position: 'relative',
        paddingTop: '24px',
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        display: 'flex',
        alignSelf: 'flex-end',
        position: 'relative',
        fontSize: '16px',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <div style= {this.styles.row}>
          <span style={this.styles.field}>
            {'Email: soniayangsux@edgeyl.org'}
          </span>
          <Clickable
            content={'Change'}
            route={Routes.pages.profile}
            styles={this.clickableStyles} />   
        </div>
        <div style= {this.styles.row}>
          <span style={this.styles.field}>
            {'Password: **********'}
          </span>
          <Clickable
            content={'Change'}
            route={Routes.pages.profile}
            styles={this.clickableStyles} />        
        </div>     
      </div>         
    );
  }
}

