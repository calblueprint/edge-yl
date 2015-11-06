class UsersPage extends Component {

  static get propTypes() {
    return {
      students: React.PropTypes.array.isRequired,
    };
  }

  static get defaultProps() {
    return {
      students: [],
    };
  }

  static get defaultState() {
    return { sidebar: true };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flex: '1',
        paddingTop: '48px',
        paddingLeft: '196px',
      },
      body: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
        paddingLeft: '12px',
        paddingRight: '208px',
        overflow: 'scroll',
      },
    };
  }

  toggleSidebar(event) {
    this.setState({ sidebar: !this.state.sidebar });
  }

  render() {
    return (
      <div style={StyleConstants.pages.default}>
        <Header
          toggleSidebar={this.toggleSidebar.bind(this)} />
        <div style={this.styles.container}>
          <Sidebar shouldShow={this.state.sidebar} />
          <div style={this.styles.body}>
            <UsersGrid {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}
