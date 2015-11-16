class PageOverlay extends Component {

  constructor(props) {
    super(props);
    this._node = null;
  }

  static get propTypes() {
    return {
      hideOverlay: React.PropTypes.func.isRequired,
      student: React.PropTypes.object.isRequired,
      callback: React.PropTypes.func.isRequired,
    };
  }

  static get defaultProps() {
    return {
      hideOverlay: null,
      student: {},
      callback: null,
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

  componentDidMount() {
    var node = ReactDOM.findDOMNode(this.refs.container);
    this._node = node;
    node.addEventListener('click', (node) => this.handleClick(node));
  }

  handleClick(node) {
    if (node.target == this._node) {
      this.props.hideOverlay();
    }
  }

  render() {
    return (
      <div style={this.styles.container} ref={'container'}>
        <Clickable
          func={this.props.hideOverlay}
          icon={'fa fa-times fa-2x'}
          styles={this.clickableStyles}
          type={'i'} />
        <EditModal
          hideOverlay={this.props.hideOverlay}
          student={this.props.student}
          type={this.props.type}
          callback={this.props.callback} />
      </div>
    );
  }
}
