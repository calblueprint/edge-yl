class HeaderShortcuts extends Component {

  get styles() {
    return {
      container: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf: 'stretch',
        width: '196px',
        paddingRight: '12px',
        boxSizing: 'border-box',
      },
      icon: {
        color: StyleConstants.colors.white,
        fontSize: StyleConstants.fonts.large,
        padding: '20px',
      },
      hover: {
        backgroundColor: StyleConstants.colors.highlight,
      },
    };
  }

  get clickableStyles() {
    return {
      click: {
        color: StyleConstants.colors.white,
      },
      default: {
        padding: '8px',
        marginLeft: '8px',
        color: StyleConstants.colors.opaque,
        fontSize: '20px',
      },
      hover: {
        color: StyleConstants.colors.white,
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <Clickable
          icon={'fa fa-envelope fa-x'}
          route={RouteConstants.pages.mail}
          styles={this.clickableStyles} />
        <Clickable
          icon={'fa fa-user fa-x'}
          route={RouteConstants.pages.profile}
          styles={this.clickableStyles} />
      </div>
    );
  }
}
