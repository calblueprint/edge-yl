class Header extends Component {

  static get propTypes() {
    return {
      handleClick: React.PropTypes.func.isRequired,
    };
  }

  static get defaultProps() {
    return {
      handleClick: null,
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
      hover: {
        backgroundColor: StyleConstants.colors.highlight,
      },
    };
  }

  get clickableStyles() {
    return {
      hover: {
        backgroundColor: StyleConstants.colors.sky,
      };
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.sidebar}>
          <Clickable
            styles={this.clickableStyles}
            func={this.props.handleClick}>
            <i
              className={"fa fa-bars fa-x"}
              style={this.styles.icon}>
            </i>
          </Clickable>
        </div>
        <HeaderNavigation />
        <HeaderShortcuts />
      </div>
    );
  }
}
