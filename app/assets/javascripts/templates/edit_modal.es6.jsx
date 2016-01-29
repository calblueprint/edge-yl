class EditModal extends Component {

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
          marginTop: '6px',
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
    node.onclick = (event) => this.handleClick(event);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div ref={'container'} style={this.styles.container}>
        <h2>{'Edit'}</h2>
        {this.renderBody()}
      </div>
    );
  }
}
