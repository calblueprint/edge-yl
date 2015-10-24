class Header extends Component {

  static get propTypes() {
    return {
      toggleSidebar: React.PropTypes.func,
      hasSidebar: React.PropTypes.bool.isRequired,
    };
  }

  static get defaultProps() {
    return {
      toggleSidebar: null,
      hasSidebar: true,
    };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        alignItems: 'center',
        height: '48px',
        backgroundColor: StyleConstants.colors.blue,
        boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)',
      },
      sidebar: {
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'stretch',
        width: '196px',
        paddingLeft: '24px',
        boxSizing: 'border-box',
      },
      icon: {
        color: StyleConstants.colors.white,
        fontSize: '24px',
      },
    };
  }

  showSidebarToggle() {
    return (
      <Clickable
        func={this.props.toggleSidebar}>
        <i
          className={"fa fa-bars fa-x"}
          style={this.styles.icon}>
        </i>
      </Clickable>
    );
  }

  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.sidebar}>
          { this.props.hasSidebar ? this.showSidebarToggle() : null }
        </div>
        <HeaderNavigation />
        <HeaderShortcuts />
      </div>
    );
  }
}
