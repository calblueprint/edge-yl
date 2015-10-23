class ProfileOptions extends Component {

  get styles() {
    return {
      container: Object.assign(
        {},
        {
          position: 'relative',
          padding: '24px',
          marginTop: '2%',
        },
        StyleConstants.cards.default
      ),
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

