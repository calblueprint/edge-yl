class PageOverlay extends Component {

  static get propTypes() {
    return {
      shouldShow: React.PropTypes.bool.isRequired,
      student: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      shouldShow: true,
      student: {},
    };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        zIndex: StyleConstants.planes.nine,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
      },
      hidden: {
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
      this.styles.container,
      !this.props.shouldShow && this.styles.hidden
    );
    return (
      <div style={style}>
        <Clickable
          func={this.props.closeOverlay}
          icon={'fa fa-times fa-2x'}
          styles={this.clickableStyles}
          type={'i'} />
        <EditModal student={this.props.student}
          type={this.props.type} />
      </div>
    );
  }
}
