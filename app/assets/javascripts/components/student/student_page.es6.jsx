class StudentPage extends Component {

  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      student: {},
    };
  }

  static get defaultState() {
    return { sidebar: true,
             overlay: false };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flex: '1',
        paddingTop: '48px',
        paddingLeft: '196px',
      },
      placeholder: {
        width: '196px',
      },
      overlay: {
        display: 'flex',
        position: 'fixed',
        height: '100%',
        width: '100%',
        flexFlow: 'row',
        alignItems: 'center',
        zIndex: StyleConstants.planes.nine,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
      },
      editBox: {
        // position: 'fixed',
        alignSelf: 'stretch',
        width: '256px',
        height: '256px',
        margin: '0 auto',
        zIndex: StyleConstants.planes.nine,
        backgroundColor: 'white',
      },
    };
  }

  toggleSidebar(event) {
    this.setState({ sidebar: !this.state.sidebar });
  }

  renderOverlay(event) {
    this.setState({ overlay: !this.state.sidebar });
    console.log("overlay")
  }

  closeOverlay() {
    console.log('close')
    this.styles.overlay.display = 'none'
  }

  render() {
    return (
      <div style={StyleConstants.pages.default}>
        <div style={this.styles.overlay} ref={'overlay'}>
          <div style={this.styles.editBox}>
            <Clickable
              func={this.closeOverlay.bind(this)}>
              close
            </Clickable>
            <span>edit box</span>
          </div>
        </div>
        <Header
          toggleSidebar={this.toggleSidebar.bind(this)} />
        <div style={this.styles.container}>
          <Sidebar shouldShow={this.state.sidebar} />
          <StudentGrid {...this.props} renderOverlay={this.renderOverlay.bind(this)} />
          <div style={this.styles.placeholder}></div>
        </div>
      </div>
    );
  }
}

