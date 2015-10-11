class Header extends Component {

  get styles() {
    return {
      container: {
        // display:'flexbox',
        position: 'relative',
        verticalAlign: 'middle',
        width: '100%',
        height: 32,
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

  render() {
    return (
      <div style={this.styles.container}>
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
      </div>
    );
  }
}
