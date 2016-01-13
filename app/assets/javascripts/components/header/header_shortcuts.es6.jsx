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
          position: 'absolute',
          width: '128px',
          top: '44px',
          right: '0px',
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
      return [
        <Clickable
          key={1}
          icon={TypeConstants.icons.email}
          route={RouteConstants.emails.index}
          styles={this.clickableStyles}
          type={'i'} />,
        <Clickable
          action={() => HeaderActions.toggleDropdown()}
          key={2}
          icon={TypeConstants.icons.profile}
          styles={this.clickableStyles}
          type={'i'} />,
      ];
    }
  }

  render() {
    return (
      <div style={StyleConstants.containers.header(false)}>
        {this.renderShortcuts()}
        {this.renderDropdown()}
      </div>
    );
  }
}
