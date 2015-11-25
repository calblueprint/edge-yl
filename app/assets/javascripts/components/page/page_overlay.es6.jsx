class PageOverlay extends Component {

  // --------------------------------------------------
  // Setup
  // --------------------------------------------------
  constructor(props) {
    super(props);
    this._node = null;
  }

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      overlay: React.PropTypes.shape({
        active: React.PropTypes.bool.isRequired,
        target: React.PropTypes.string.isRequired,
        type: React.PropTypes.string.isRequired,
      }).isRequired,
      profile: React.PropTypes.object.isRequired,
      student: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      overlay: {
        active: false,
        target: TypeConstants.overlay.type.edit,
        type: TypeConstants.overlay.target.preview,
      },
      profile: {},
      student: {},
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
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
      },
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentDidMount() {
    var node = ReactDOM.findDOMNode(this.refs.container);
    this._node = node;
    node.addEventListener('click', (event) => this.handleClick(event));
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    if (event.target === this._node) {
      StudentActions.storeOverlay(false);
    }
  }

//  --------------------------------------------------
//  Render
//  --------------------------------------------------
  renderModal() {
    if (this.props.overlay.type === TypeConstants.overlay.type.edit) {
      return (
        <EditModal
          overlay={this.props.overlay}
          student={this.props.student} />
      );
    } else {
      return (
        <CreateModal
          overlay={this.props.overlay}
          profile={this.props.profile}
          student={this.props.student} />
      );
    }
  }

  render() {
    return (
      <div ref={'container'} style={this.styles.container}>
        <Clickable
          action={(event) => StudentActions.storeOverlay(false)}
          icon={'fa fa-times fa-2x'}
          styles={this.clickableStyles}
          type={'i'} />
        {this.renderModal()}
      </div>
    );
  }
}
