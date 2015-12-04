class GroupPage extends Component {

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
        paddingRight: '196px',
      },
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
  	this.setState(ProfileStore.getState());
  }

  componentDidMount() {
  	ProfileStore.listen(this._listener);
  	ProfileActions.fetchProfile();
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this._listener);
  }

  render() {
    return (
        <div style={this.styles.container}>
        <Header hasSidebar={true}/>
          <Sidebar
            hidden={false}
            profile={this.state.profile} />
          <GroupGrid  />
        </div>
    );
  }
}

