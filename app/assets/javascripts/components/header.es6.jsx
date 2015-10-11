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
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        color: 'white',
        fontSize: '24px',
      },
      middleSearch: {
        display: 'flex',
        flex: 3,
        alignItems: 'center',
        alignSelf: 'stretch',
      },
      rightButtons: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
      },
      icon: {
        position: 'relative',
        marginRight: '10px',
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
            content={'S'}
            func={this.props.handleSidebarClick}
            styles={this.clickableStyles} />
          <i className={"fa fa-bars fa-x"} style={this.styles.icon}></i>
        </div>
        <div style={this.styles.middleSearch}>
          <SearchBar />
        </div>
        <div style={this.styles.rightButtons}>
          
        </div>
      </div>
    );
  }
}
