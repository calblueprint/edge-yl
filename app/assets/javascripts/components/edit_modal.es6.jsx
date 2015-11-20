class EditModal extends Component {

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
      student: React.PropTypes.object.isRequired,
      type: React.PropTypes.oneOf([
        'contact',
        'conference',
        'parent',
        'preview',
        'createComment',
      ]).isRequired,
    };
  }

  static get defaultProps() {
    return {
      student: {},
      type: 'preview',
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
  componentWillMount() {
    this.setState(StudentStore.getState());
  }

  componentDidMount() {
    this._listener = StudentStore.listen((state) => this.setState(state));
    var node = ReactDOM.findDOMNode(this.refs.container);
    this._node = node;
    node.addEventListener('click', (event) => this.handleClick(event));
  }

  componentWillUnmount() {
    StudentStore.unlisten(this._listener);
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
    switch (this.state.overlay.type) {
      case 'preview':
        return <EditPreview {...this.props} />;
      case 'contact':
        return <EditContact {...this.props} />
      case 'createComment':
        return <CreateComment {...this.props} />;
    };
  }

  render() {
    return (
      <div ref={'container'} style={this.styles.container}>
        <h2 style={this.styles.title}>{'Edit'}</h2>
        {this.renderBody()}
      </div>
    );
  }
}
