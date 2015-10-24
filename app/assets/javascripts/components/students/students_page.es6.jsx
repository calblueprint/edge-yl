class StudentsPage extends Component {

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

  handleClick(event) {
    this.setState({ sidebar: !this.state.sidebar });
  }

  render() {
    return (
      <div style={StyleConstants.pages.default}>
        <Header
          handleClick={this.handleClick.bind(this)} />
        <div style={this.styles.container}>
          <Sidebar shouldShow={this.state.sidebar} />
          <div style={this.styles.body}>
            <StudentsFilters />
            <StudentsGrid {...this.props} />
          </div>
          <div style={this.styles.placeholder}></div>
        </div>
      </div>
    );
  }
}
