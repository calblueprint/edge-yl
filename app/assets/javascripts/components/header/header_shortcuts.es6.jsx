class HeaderShortcuts extends Component {

  get styles() {
    return {
      container: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf: 'stretch',
        width: '196px',
        paddingRight: '24px',
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
      hover: {
        backgroundColor: StyleConstants.colors.highlight,
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <Clickable
          route={RouteConstants.pages.mail}
          styles={this.clickableStyles}>
        <i
          className={"fa fa-envelope-o fa-x"}
          style={this.styles.icon}>
        </i>
        </Clickable>
        <Clickable
          route={RouteConstants.pages.profile}
          styles={this.clickableStyles}>
          <i
            className={"fa fa-user fa-x"}
            style={this.styles.icon}>
          </i>
        </Clickable>
      </div>
    );
  }
}
