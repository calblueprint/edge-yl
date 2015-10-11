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
        // display:'flexbox',
        position: 'relative',
        height: '48px',
        backgroundColor: '#68B1DE',
        padding: 10,
        boxShadow: '0 0 50px 0 rgba(0, 0, 0, 0.15)',
      },

      left_title: {
        display: 'inline-block',
        color: 'white',
        fontSize: '25px',
      },

      middle_search: {
        display: 'inline-block',
        width: '50%',
        color: 'white',
        textAlign: 'center'
      },

      right_buttons: {
        display: 'inline-block',
        float: 'right',
        width: '25%',
        color: 'white',
        fontSize: '20px',
      },

      icon: {
        position: 'relative',
        marginRight: '10px',
      }
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
<<<<<<< HEAD
        <div style={this.styles.left_title}>
          <i className={"fa fa-bars fa-x"} style={this.styles.icon}></i>
          {'Edge Youth Leadership'}
        </div>
        <div style={this.styles.middle_search}>
          {"[ Max's searchbar goes here ]"}
        </div>
        <div style={this.styles.right_buttons}>
          <GeneralButton
            content={'About'} />
          <GeneralButton
            content={'Login'} />
          <GeneralButton
            content={'Signup'} />
          <GeneralButton
            content={'Contact'} />
        </div>
=======
        <Clickable
          content={'S'}
          func={this.props.handleSidebarClick}
          styles={this.clickableStyles} />
        <span style={this.styles.title}>
          {'edge-yl'}
        </span>
>>>>>>> 937e4686521a6278dc3b56b55a3ce691de065462
      </div>
    );
  }
}
