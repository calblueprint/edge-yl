class HeaderShortcuts extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      showShortcuts: React.PropTypes.bool.isRequired,
    };
  }

  static get defaultProps() {
    return {
      showShortcuts: true,
    };
  }

  // --------------------------------------------------
  // State
  // --------------------------------------------------
  static get defaultState() {
    return { dropdown: false };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
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
        default: {
          flex: '1',
          padding: '12px',
        },
        hover: {
          backgroundColor: StyleConstants.colors.turquoise,
        },
      },
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          display: 'flex',
          flexFlow: 'column',
          position: 'absolute',
          width: '128px',
          top: '48px',
          right: '0px',
        }
      ),
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleBlur(event) {
    this.setState({ dropdown: false });
  }

  handleClick(event) {
    this.setState({ dropdown: !this.state.dropdown });
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderDropdown() {
    if (this.state.dropdown) {
      var options = [
        {
          content: 'Profile',
          route: RouteConstants.pages.profile,
        },
        {
          content: 'Logout',
          func: () => {
            Requester.delete(
              ApiConstants.users.logout,
              (response) => { window.location = RouteConstants.pages.login }
            );
          },
        },
      ];
      return (
        <Dropdown
          options={options}
          styles={this.dropdownStyles}
          blur={(event) => this.handleBlur(event)} />
      );
    }
  }

  renderShortcuts() {
    if (this.props.showShortcuts) {
      return [
        <Clickable
          key={1}
          icon={'fa fa-envelope fa-x'}
          route={RouteConstants.pages.mail}
          styles={this.clickableStyles}
          type={'i'} />,
        <Clickable
          key={2}
          icon={'fa fa-user fa-x'}
          action={(event) => this.handleClick(event)}
          styles={this.clickableStyles}
          type={'i'} />,
      ];
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
