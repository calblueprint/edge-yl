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
        alignItems: 'center',
        position: 'fixed',
        top: '0px',
        left: '0px',
        zIndex: StyleConstants.planes.nine,
        width: '100vw',
        height: '100vh',
        backgroundColor: StyleConstants.colors.opaque,
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

  componentDidMount() {
    var node = ReactDOM.findDOMNode(this.refs.container);
    node.addEventListener('click', (node) => this.handleClick(node));
  }

  handleClick(node) {
    if (node.target == ReactDOM.findDOMNode(this.refs.container)) {
      this.props.hideOverlay();
    }
  }

  render() {
    return (
      <div style={this.styles.container} ref={'container'} >
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
