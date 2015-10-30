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
        position: 'fixed',
        top: '0px',
        left: '0px',
        zIndex: StyleConstants.planes.nine,
        width: '100%',
        height: '48px',
        backgroundColor: StyleConstants.colors.blue,
        boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)',
      },
      sidebar: {
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'stretch',
        width: '196px',
        paddingLeft: '12px',
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

  renderToggler() {
    return (
      <Clickable
        func={this.props.toggleSidebar}
        icon={'fa fa-bars fa-x'}
        styles={this.clickableStyles}
        type={'i'} />
    );
  }

  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.sidebar}>
          {this.props.hasSidebar && this.renderToggler()}
        </div>
        <HeaderNavigation />
        <HeaderShortcuts />
      </div>
    );
  }
}
