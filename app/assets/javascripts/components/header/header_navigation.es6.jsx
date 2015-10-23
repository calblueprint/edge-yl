class HeaderNavigation extends Component {

  get styles() {
    return {
      container: {
        display: 'flex',
        flex: '1',
        padding: '0 12px',
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
        position: 'relative',
        color: 'white',
        paddingRight: '16px',
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
