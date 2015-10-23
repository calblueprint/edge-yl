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
        color: 'white',
        fontSize: '24px',
        padding: '20px',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <Clickable
          route={RouteConstants.pages.mail}>
        <i
          className={"fa fa-envelope-o fa-x"}
          style={this.styles.icon}>
        </i>
        </Clickable>
        <Clickable
          route={RouteConstants.pages.profile}>
          <i
            className={"fa fa-user fa-x"}
            style={this.styles.icon}>
          </i>
        </Clickable>
      </div>
    );
  }
}
