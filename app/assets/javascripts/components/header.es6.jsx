class Header extends Component {

  static get propTypes() {
    return {
      handleClick: React.PropTypes.func.isRequired,
    };
  }

  static get defaultProps() {
    return {
      handleClick: null,
    };
  }
  get styles() {
    return {
      container: {
        display:'flex',
        alignItems: 'center',
        position: 'relative',
        height: '48px',
        backgroundColor: '#68B1DE',
        boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)',
      },
      leftSection: {
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'stretch',
        position: 'relative',
        width: '196px',
        paddingLeft: '24px',
        boxSizing: 'border-box',
      },
      middleSection: {
        display: 'flex',
        flex: '1',
        padding: '0 12px',
        alignItems: 'center',
        alignSelf: 'stretch',
      },
      rightSection: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf: 'stretch',
        position: 'relative',
        width: '196px',
        paddingRight: '24px',
        boxSizing: 'border-box',
      },
      icon: {
        position: 'relative',
        color: 'white',
        fontSize: '20px',
      },
      rightIcons: {
        position: 'relative',
        color: 'white',
        fontSize: '24px',
        padding: '20px',
      },
    };
  }

  get clickableStyles() {
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
        <div style={this.styles.leftSection}>
          <Clickable
            func={this.props.handleClick}>
            <i
              className={"fa fa-bars fa-x"}
              style={this.styles.icon}>
            </i>
          </Clickable>
        </div>
        <div style={this.styles.middleSection}>
          <Clickable
            content={'EDGE'}
            route={Routes.pages.login}
            styles={this.clickableStyles} />        
          <HeaderSearch />
        </div>
        <div style={this.styles.rightSection}>    
          <Clickable
            route={Routes.pages.mail}>
            <i
              className={"fa fa-envelope-o fa-x"}
              style={this.styles.rightIcons}>
            </i>
          </Clickable>
          <Clickable
            route={Routes.pages.profile}>
            <i
              className={"fa fa-user fa-x"}
              style={this.styles.rightIcons}>
            </i>
          </Clickable>
        </div>
      </div>
    );
  }
}
