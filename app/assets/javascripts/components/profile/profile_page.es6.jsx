class ProfilePage extends Component {

  static get propTypes() {
    return {
      currentUser: React.PropTypes.object.isRequired,
    }
  }

  static get defaultProps() {
    return {
      currentUser: '',
    }
  }

  static get defaultState() {
    return { sidebar: true };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        height: '100vh',
      },
      body: {
        display: 'flex',
        flex: '1',
        paddingLeft: '196px',
      },
      placeholder: {
        width: '196px',
      },
    };
  }

  toggleSidebar(event) {
    this.setState({ sidebar: !this.state.sidebar });
  }

  render() {
    return (
      <div style={this.styles.container}>
        <Header
          toggleSidebar={this.toggleSidebar.bind(this)} />
        <div style={this.styles.body}>
          <Sidebar shouldShow={this.state.sidebar} />
          <ProfileCards currentUser={this.props.currentUser} />
          <div style={this.styles.placeholder}></div>
        </div>
      </div>
    );
  }
}

