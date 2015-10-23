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
        display:'flex',
        alignItems: 'center',
        position: 'relative',
        height: '48px',
        backgroundColor: '#68B1DE',
        boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)',
      },
      leftSection: {
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'stretch',
        position: 'relative',
        width: '196px',
        paddingLeft: '24px',
        boxSizing: 'border-box',
      },
      icons: {
        position: 'relative',
        color: 'white',
        fontSize: '24px',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.leftSection}>
          <Clickable
            func={this.props.handleClick}>
            <i
              className={"fa fa-bars fa-x"}
              style={this.styles.icons}>
            </i>
          </Clickable>
        </div>
        <HeaderNavigation />
        <HeaderShortcuts />
      </div>
    );
  }
}
