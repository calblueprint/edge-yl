class HeaderShortcuts extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      active: React.PropTypes.bool.isRequired,
    };
  }

  // --------------------------------------------------
  // State
  // --------------------------------------------------
  static get defaultState() {
    return {
      dropdown: false,
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
      shortcuts: {
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
          padding: '12px 0px',
          paddingLeft: '0px',
          margin: '0px 12px',
          transition: 'padding 0.25s ease-out',
        },
        hover: {
          paddingLeft: '4px',
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
  // Helpers
  // --------------------------------------------------
  toggleDropdown() {
    this.setState({ dropdown: !this.state.dropdown });
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderDropdown() {
    if (this.state.dropdown) {
      var options = [
        {
          content: 'Edit profile',
          route: RouteConstants.pages.profile,
        },
        {
          content: 'Leave feedback',
          route: RouteConstants.pages.feedback,
        },
        {
          action: () => AuthenticationActions.destroySession(),
          content: 'Log out',
        },
      ];
      return (
        <Dropdown
          action={() => this.toggleDropdown()}
          options={options}
          styles={this.dropdownStyles} />
      );
    }
  }

  renderShortcuts() {
    if (this.props.active) {
      return (
        <div style={this.styles.shortcuts}>
          <Clickable
            icon={TypeConstants.icons.email}
            route={RouteConstants.emails.index}
            styles={this.clickableStyles}
            type={'i'} />
          <Clickable
            action={() => this.toggleDropdown()}
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
