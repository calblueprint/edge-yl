class SchoolsPage extends Component {

  static get propTypes() {
    return {
      schools: React.PropTypes.array.isRequired,
    };
  }

  static get defaultProps() {
    return {
      schools: [],
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
        paddingLeft: '196px',
      },
      placeholder: {
        width: '196px',
      },
      body: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
        padding: '0px 12px',
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
            <SchoolsGrid {...this.props} />
          </div>
          <div style={this.styles.placeholder}></div>
        </div>
      </div>
    );
  }
}
