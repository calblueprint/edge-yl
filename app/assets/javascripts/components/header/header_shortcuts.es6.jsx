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
    };
  }

  get clickableStyles() {
    return {
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

  get dropdownStyles() {
    return {
      child: {

      },
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          display: 'flex',
          flexFlow: 'column',
          position: 'absolute',
          width: '128px',
          top: '0px',
          left: '0px',
        }
      ),
    }
  }

  get dropdownOptions() {
    return [
      {
        content: 'Profile',
        func: null,
        route: '',
      },
      {
        content: 'Logout',
        func: null,
        route: '',
      },
    ];
  }

  render() {
    return (
      <div style={this.styles.container}>
        <Clickable
          icon={'fa fa-envelope fa-x'}
          route={RouteConstants.pages.mail}
          styles={this.clickableStyles}
          type={'i'} />
        <Clickable
          icon={'fa fa-user fa-x'}
          route={RouteConstants.pages.profile}
          styles={this.clickableStyles}
          type={'i'} />
        <Dropdown
          options={this.dropdownOptions}
          styles={this.dropdownStyles} />
      </div>
    );
  }
}
