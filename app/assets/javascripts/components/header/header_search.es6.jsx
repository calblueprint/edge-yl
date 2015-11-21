class HeaderSearch extends Component {

  // --------------------------------------------------
  // Setup
  // --------------------------------------------------
  constructor(props) {
    super(props);
    this._listener = (state) => this.setState(state);
  }

  // --------------------------------------------------
  // State
  // --------------------------------------------------
  static get defaultState() {
    return {
      query: '',
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flex: '1',
        height: '30px',
      },
      input: {
        flex: '1',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '1px',
      },
      section: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '64px',
        backgroundColor: StyleConstants.colors.indigo,
        borderRadius: '1px',
        color: StyleConstants.colors.white,
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '64px',
        backgroundColor: StyleConstants.colors.indigo,
        borderRadius: '1px',
        color: StyleConstants.colors.white,
      },
      hover: {
        backgroundColor: StyleConstants.colors.white,
      },
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {

  }

  handleInput(event) {
    HeaderActions.storeQuery(event.target.value);
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(HeaderStore.getState());
  }

  componentDidMount() {
    HeaderStore.listen(this._listener);
    var search = ReactDOM.findDOMNode(this.refs.search);
    search.addEventListener('input', (event) => this.handleInput(event));
  }

  componentWillUnmount() {
    HeaderStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <form style={this.styles.container}>
        <Clickable
          action={(event) => this.handleClick(event)}
          icon={'fa fa-search fa-1x'}
          styles={this.clickableStyles}
          type={'i'} />
        <input
          placeholder={'Search for a student, school, or recruiter'}
          ref={'search'}
          style={this.styles.input}>
        </input>
      </form>
    );
  }
}
