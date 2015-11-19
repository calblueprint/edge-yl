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
      school: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      school: {},
    };
  }

  // --------------------------------------------------
  // State
  // --------------------------------------------------
  static get defaultState() {
    return {
      overlay: false,
      type: 'preview',
      callback: () => null,
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
          hideOverlay={(response) => this.hideOverlay(response)}
          student={this.state.student}
          type={this.state.type}
          callback={(this.state.callback == null) ? () => null : this.state.callback }
          {...this.props} />
      );
    }
  }

  render() {
    return (
      <div style={StyleConstants.pages.default}>
        <Header
          toggleSidebar={() => this.toggleSidebar()} />
        <div style={this.styles.container}>
          <Sidebar shouldShow={this.state.sidebar} />
          <SchoolGrid {...this.props} />
          <div style={this.styles.placeholder}></div>
        </div>
      </div>
    );
  }
}
