class HeaderShortcuts extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      profile: React.PropTypes.object.isRequired,
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
        StyleConstants.templates.card,
        {
          marginTop: '6px',
        }
      ),
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderDropdown() {
    if (this.state.dropdown) {
      var choices = [
        {
          content: 'Edit profile',
          route: RouteConstants.pages.profile,
        },
        {
          content: 'Import data',
          route: RouteConstants.pages.import,
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
        <DropdownChoices
          choices={choices}
          hide={() => this.setState({ dropdown: false })}
          styles={this.dropdownStyles} />
      );
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.shortcuts}>
          <HeaderInbox count={this.props.profile.unread_count} />
          <Clickable
            action={() => this.setState({ dropdown: !this.state.dropdown })}
            icon={TypeConstants.icons.settings}
            styles={this.clickableStyles}
            type={'i-left'} />
        </div>
        {this.renderDropdown()}
      </div>
    );
  }
}
