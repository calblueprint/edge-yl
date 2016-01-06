class Header extends Component {

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
      active: React.PropTypes.bool.isRequired,
      profile: React.PropTypes.object,
    };
  }

  static get defaultProps() {
    return {
      profile: {},
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        alignItems: 'center',
        position: 'fixed',
        top: '0px',
        left: '0px',
        zIndex: StyleConstants.planes.eight,
        width: '100%',
        height: StyleConstants.heights.header,
        backgroundColor: StyleConstants.colors.blue,
        boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)',
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        padding: '8px',
        marginLeft: '8px',
        color: StyleConstants.colors.opaque,
        fontSize: '20px',
      },
      hover: {
        color: StyleConstants.colors.white,
      },
    };
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
  // Helpers
  // --------------------------------------------------

  toggleSidebar() {
    var profile = this.props.profile;
    ProfileActions.toggleSidebar(profile.id, !profile.has_sidebar);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderToggler() {
    if (this.props.active) {
      return (
        <Clickable
          action={() => this.toggleSidebar()}
          icon={TypeConstants.icons.bars}
          styles={this.clickableStyles}
          type={'i'} />
      );
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        <div style={StyleConstants.containers.header(true)}>
          {this.renderToggler()}
        </div>
        <HeaderNavigation
          active={this.props.active}
          pagination={this.state.pagination}
          results={this.state.results}
          search={this.state.search} />
        <HeaderShortcuts
          active={this.props.active}
          dropdown={this.state.dropdown} />
      </div>
    );
  }
}
