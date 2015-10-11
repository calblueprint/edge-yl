class Header extends Component {

  static get propTypes() {
    return {
      handleSidebarClick: React.PropTypes.func.isRequired,
    };
  }

  static get defaultProps() {
    return {
      handleSidebarClick: null,
    };
  }
  get styles() {
    return {
      container: {
        display:'flex',
        alignItems: 'center',
        position: 'relative',
        height: '48px',
        backgroundColor: '#68B1DE',
        boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)',
      },
      leftTitle: {
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'stretch',
        position: 'relative',
        width: '172px',
        paddingLeft: '24px',
        boxSizing: 'border-box',
      },
      middleSearch: {
        display: 'flex',
        flex: 1,
        padding: '0 12px',
        alignItems: 'center',
        alignSelf: 'stretch',
      },
      rightButtons: {
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'stretch',
        position: 'relative',
        width: '172px',
      },
      icon: {
        position: 'relative',
        color: 'white',
        fontSize: '16px',
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        position: 'relative',
        width: '16px',
        height: '16px',
        padding: '4px',
        color: 'white',
        border: '2px solid white',
        borderRadius: '8px',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.leftTitle}>
          <Clickable
            func={this.props.handleSidebarClick}>
            <i
              className={"fa fa-bars fa-x"}
              style={this.styles.icon}>
            </i>
          </Clickable>
        </div>
        <div style={this.styles.middleSearch}>
          <HeaderSearch />
        </div>
        <div style={this.styles.rightButtons}>
          <Clickable
            content={'P'}
            route={Routes.pages.profile}
            styles={this.clickableStyles} />
        </div>
      </div>
    );
  }
}
