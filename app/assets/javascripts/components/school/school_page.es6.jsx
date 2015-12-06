class SchoolPage extends Component {

  // --------------------------------------------------
  // Setup
  // --------------------------------------------------
  constructor(props) {
    super(props);
    this._listener = (state) => this.setState(state);
  }

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      id: React.PropTypes.number.isRequired,
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
    this.setState(ProfileStore.getState());
    this.setState(SchoolStore.getState());
  }

  componentDidMount() {
    ProfileStore.listen(this._listener);
    SchoolStore.listen(this._listener);
    ProfileActions.fetchProfile();
    SchoolActions.fetchSchool(this.props.id);
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this._listener);
    SchoolStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderOverlay() {
  if (this.state.overlay.active) {
      return (
        <SchoolPageOverlay
          overlay={this.state.overlay}
          school={this.state.school} />
      );
    }
  }

  render() {
    return (
      <div style={StyleConstants.pages.default}>
        {this.renderOverlay()}
        <Header active={true} />
        <div style={this.styles.container}>
          <Sidebar
            active={this.state.sidebar}
            profile={this.state.profile} />
          <SchoolGrid school={this.state.school} />
          <div style={this.styles.placeholder} />
        </div>
      </div>
    );
  }
}
