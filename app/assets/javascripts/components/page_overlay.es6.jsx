class PageOverlay extends Component {

  static get propTypes() {
    return {
      showOverlay: React.PropTypes.bool.isRequired,
    };
  }

  static get defaultProps() {
    return {
      showOverlay: true,
    };
  }

  get styles() {
    return {
      overlay: {
        display: 'flex',
        flexFlow: 'row',
        alignItems: 'center',
        position: 'fixed',
        zIndex: StyleConstants.planes.nine,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
      },
      editBox: {
        zIndex: StyleConstants.planes.nine,
        width: '256px',
        height: '256px',
        margin: '0 auto',
        backgroundColor: 'white',
      },
      hideOverlay: {
        display: 'none',
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        zIndex: StyleConstants.planes.nine,
        margin: '12px',
        color: StyleConstants.colors.white,
      },
      hover: {
        color: 'rgba(255, 255, 255, 0.6)',
      },
    };
  }

  render() {
    var style = Object.assign(
      {},
      this.styles.overlay,
      !this.props.showOverlay && this.styles.hideOverlay
    );
    return (
      <div style={style}>
        <Clickable
          func={this.props.closeOverlay}
          icon={'fa fa-times fa-2x'}
          styles={this.clickableStyles}
          type={'i'} />
        <div style={this.styles.editBox}>
        </div>
      </div>
    );
  }
}
