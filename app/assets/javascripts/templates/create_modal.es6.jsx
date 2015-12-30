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
        StyleConstants.containers.card,
        {
          justifyContent: 'center',
          width: '356px',
        }
      ),
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
        <h2>{'Create'}</h2>
        {this.renderBody()}
      </div>
    );
  }
}
