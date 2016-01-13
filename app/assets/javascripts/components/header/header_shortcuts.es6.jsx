class HeaderShortcuts extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      active: React.PropTypes.bool.isRequired,
      dropdown: React.PropTypes.bool.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        width: StyleConstants.widths.sidebar,
        height: StyleConstants.heights.header,
        paddingRight: '6px',
        boxSizing: 'border-box',
      },
      section: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignContent: 'center',
        alignSelf: 'stretch',
        minHeight: StyleConstants.heights.header,
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignSelf: 'stretch',
        padding: '0px 12px',
        color: StyleConstants.colors.opaque,
      },
      hover: {
        color: StyleConstants.colors.white,
      },
    };
  }

  get dropdownStyles() {
    return {
      child: {
        default: {
          flex: '1',
          padding: '12px 0px',
          paddingLeft: '0px',
          margin: '0px 12px',
          transition: 'padding 0.25s ease-out',
        },
        hover: {
          paddingLeft: '8px',
        },
      },
      container: Object.assign(
        {},
        StyleConstants.containers.card,
        {
          marginTop: '0px',
        }
      ),
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderDropdown() {
    if (this.props.dropdown) {
      var options = [
        {
          content: 'Profile',
          route: RouteConstants.pages.profile,
        },
        {
          content: 'Give Feedback',
          route: RouteConstants.pages.feedback,
        },
        {
          action: () => AuthenticationActions.destroySession(),
          content: 'Logout',
        },
      ];
      return (
        <Dropdown
          action={() => HeaderActions.toggleDropdown()}
          options={options}
          styles={this.dropdownStyles} />
      );
    }
  }

  renderShortcuts() {
    if (this.props.active) {
      return (
        <div style={this.styles.section}>
          <Clickable
            icon={TypeConstants.icons.email}
            route={RouteConstants.emails.index}
            styles={this.clickableStyles}
            type={'i'} />
          <Clickable
            action={() => HeaderActions.toggleDropdown()}
            icon={TypeConstants.icons.settings}
            styles={this.clickableStyles}
            type={'i'} />
        </div>
      );
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        {this.renderShortcuts()}
        {this.renderDropdown()}
      </div>
    );
  }
}
