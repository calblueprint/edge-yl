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
    	conferenceId: React.PropTypes.number.isRequired
      id: React.PropTypes.number.isRequired,
    };
  }

  static get defaultProps() {
    return {
    	conferenceId: 1,
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
  	this.setState(GroupStore.getState());
  }

  componentDidMount() {
  	ProfileStore.listen(this._listener);
  	GroupStore.listen(this._listener);
  	ProfileActions.fetchProfile();
  	GroupActions.fetchGroup(this.props.conferenceId, this.props.id)
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this._listener);
    GroupStore.unlisten(this._listener);
  }

  render() {
    return (
        <div style={this.styles.container}>
        <Header hasSidebar={true}/>
          <Sidebar
            hidden={this.state.sidebar}
            profile={this.state.profile} />
          <GroupGrid students={this.state.group.students} />
        </div>
    );
  }
}

