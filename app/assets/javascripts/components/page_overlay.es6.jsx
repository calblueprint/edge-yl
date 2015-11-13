class PageOverlay extends Component {

  static get propTypes() {
    return {
      hideOverlay: React.PropTypes.func.isRequired,
      student: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      hideOverlay: null,
      student: {},
    };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        justifyContent: 'center',
        position: 'fixed',
        top: '0px',
        left: '0px',
        zIndex: StyleConstants.planes.nine,
        width: '100vw',
        height: '100vh',
        backgroundColor: StyleConstants.colors.fog,
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
        padding: '8px',
        color: StyleConstants.colors.blue,
      },
      hover: {
        color: StyleConstants.colors.indigo,
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <Clickable
          func={this.props.hideOverlay}
          icon={'fa fa-times fa-2x'}
          styles={this.clickableStyles}
          type={'i'} />
        <EditModal
          student={this.props.student}
          type={this.props.type} />
      </div>
    );
  }
}
