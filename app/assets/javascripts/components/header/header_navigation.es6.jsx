class HeaderNavigation extends Component {

  get styles() {
    return {
      container: {
        display: 'flex',
        flex: '1',
        padding: '0px 12px',
        alignItems: 'center',
        alignSelf: 'stretch',
      },
      icon: {
        position: 'relative',
        color: 'white',
        fontSize: '20px',
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        paddingRight: '16px',
        color: 'white',
        fontSize: '24px',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <Clickable
          content={'EDGE'}
          route={RouteConstants.pages.login}
          styles={this.clickableStyles} />
        <HeaderSearch />
      </div>
    );
  }
}
