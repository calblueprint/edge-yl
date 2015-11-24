class SchoolPage extends Component {

  // --------------------------------------------------
  // Setup
  // --------------------------------------------------
  constructor(props) {
    super(props);
    this._listener = null;
  }

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      id: React.PropTypes.number.isRequired,
    };
  }

  static get defaultProps() {
    return {
      id: 1,
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
        paddingTop: '48px',
        paddingLeft: '196px',
      },
      placeholder: {
        width: '196px',
      },
    };
  }


  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(SchoolStore.getState());
  }

  componentDidMount() {
    this._listener = SchoolStore.listen((state) => this.setState(state));
    SchoolActions.fetchSchool(this.props.id);
  }

  componentWillUnmount() {
    SchoolStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  hideOverlay(response) {
    if (response) {
      this.setState({ overlay: false, school: response });
    } else {
      this.setState({ overlay: false });
    }
  }

  showOverlay(type, callback) {
    this.setState({ overlay: true, type: type, callback: callback});
  }

  toggleSidebar(event) {
    SchoolActions.toggleSidebar(!this.state.sidebar);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderOverlay() {
    if (this.state.overlay) {
      return (
        <PageOverlay
          {...this.props} />
      );
    }
  }

  render() {
    return (
      <div style={StyleConstants.pages.default}>
        <Header toggleSidebar={() => this.toggleSidebar()} />
        <div style={this.styles.container}>
          <Sidebar hidden={this.state.sidebar} />
          <SchoolGrid school={this.state.school} />
          <div style={this.styles.placeholder}></div>
        </div>
      </div>
    );
  }
}
