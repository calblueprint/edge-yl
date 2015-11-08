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
             overlay: false,
             editBox: false, };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flex: '1',
        paddingTop: '48px',
        paddingLeft: '196px',
        paddingRight: '196px',
      },
      placeholder: {
        width: '196px',
      },
      overlay: {
        display: 'flex',
        position: 'fixed',
        height: '100vh',
        width: '100vw',
        flexFlow: 'row',
        alignItems: 'center',
        zIndex: StyleConstants.planes.nine,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
      },
      hideOverlay: {
        display: 'none',
      },
      editBox: {
        width: '256px',
        height: '256px',
        margin: '0 auto',
        zIndex: StyleConstants.planes.nine,
        backgroundColor: 'white',
      },
      hideEditBox: {
        display: 'none',
      },

    };
  }

  toggleSidebar(event) {
    this.setState({ sidebar: !this.state.sidebar });
  }

  renderOverlay(event) {
    this.setState({ overlay: true });
  }

  closeOverlay() {
    this.setState({ overlay: false });
  }

  render() {
    var overlay_style = Object.assign(
      {},
      this.styles.overlay,
      !this.state.overlay && this.styles.hideOverlay
    );
    var box_style = Object.assign(
      {},
      this.styles.editBox,
      !this.state.overlay && this.styles.hideEditBox
    );
    return (

      <div style={StyleConstants.pages.default}>
        <div style={overlay_style}>
          <div style={box_style}>
            <Clickable
              func={this.closeOverlay.bind(this)}>
              close
            </Clickable>
          </div>
        </div>


        <Header
          toggleSidebar={this.toggleSidebar.bind(this)} />
        <div style={this.styles.container}>
          <Sidebar shouldShow={this.state.sidebar} />
          <StudentGrid {...this.props} renderOverlay={this.renderOverlay.bind(this)} />
          <StudentComments
            comments={[{user: "Max Wolffe", content: "Cats and Dogs and Mice"},]} />
        </div>
      </div>
    );
  }
}

