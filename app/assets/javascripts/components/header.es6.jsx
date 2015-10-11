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
        boxShadow: '0 0 50px 0 rgba(0, 0, 0, 0.15)',
      },
      leftTitle: {
        flex: 1,
        color: 'white',
        fontSize: '24px',
      },
      middleSearch: {
        flex: 2,
        color: 'white',
        textAlign: 'center'
      },
      rightButtons: {
        flex: 1,
        color: 'white',
        fontSize: '20px',
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
          {"[ Max's searchbar goes here ]"}
        </div>
        <div style={this.styles.rightButtons}>
          
        </div>
      </div>
    );
  }
}
