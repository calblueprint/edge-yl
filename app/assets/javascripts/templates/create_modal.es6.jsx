class CreateModal extends Component {

  // --------------------------------------------------
  // Setup
  // --------------------------------------------------
  constructor(props) {
    super(props);
    this._node = null;
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
      section: Object.assign(
        {},
        StyleConstants.defaults.container,
        {
          justifyContent: 'center',
          width: '356px',
        }
      ),
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
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div ref={'container'} style={this.styles.container}>
        <h2 style={this.styles.title}>{'Create'}</h2>
        {this.renderBody()}
      </div>
    );
  }
}
