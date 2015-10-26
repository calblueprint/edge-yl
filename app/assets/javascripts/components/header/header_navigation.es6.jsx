class HeaderNavigation extends Component {

  get styles() {
    return {
      container: {
        display: 'flex',
        flex: '1',
        alignItems: 'center',
        alignSelf: 'stretch',
        padding: '0px 12px',
      },
      icon: {
        color: StyleConstants.colors.white,
        fontSize: StyleConstants.fonts.medium,
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        paddingRight: '16px',
        color: StyleConstants.colors.white,
        fontSize: '24px',
      },
      hover: {
        backgroundColor: StyleConstants.colors.highlight,
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
