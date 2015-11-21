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
    return { query: '' };
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

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    this.setState({ query: this.state.input });
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(HeaderStore.getState());
  }

  componentDidMount() {
    HeaderStore.listen(this._listener);
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
        <div style={this.styles.section}>
          <i className={'fa fa-search fa-1x'} />
        </div>
        <input
          placeholder={'Search for a student, school, or recruiter'}
          style={this.styles.input}>
        </input>
      </form>
    );
  }
}
