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
      active: React.PropTypes.bool,
      profile: React.PropTypes.object,
    };
  }

  static get defaultProps() {
    return {
      active: true,
      profile: null,
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
        boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.25)',
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignSelf: 'stretch',
        padding: '0px 12px',
        color: StyleConstants.colors.opaque,
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
  updateSidebar() {
    ProfileActions.updateSidebar(this.props.profile);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderToggler() {
    if (this.props.active) {
      return (
        <Clickable
          action={() => this.updateSidebar()}
          icon={TypeConstants.icons.hamburger}
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
          profile={this.props.profile} />
      </div>
    );
  }
}
