class CreateModal extends Component {

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
        target: TypeConstants.overlay.target.comment,
        type: TypeConstants.overlay.type.create,
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
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        marginBottom: '6px',
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

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    switch (this.props.overlay.target) {
      case 'comment':
        return (
          <CreateComment
            profile={this.props.profile}
            student={this.props.student} />
        );
    }
  }

  render() {
    return (
      <div ref={'container'} style={this.styles.container}>
        <h2 style={this.styles.title}>{'Create'}</h2>
        {this.renderBody()}
      </div>
    );
  }
}
