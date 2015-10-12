class HeaderSearch extends Component {

  get styles() {
    return {
      container: {
        display: 'flex',
        flex: 1,
        height: '30px',
      },
      leftSection: {
        display: 'flex',
        width: '64px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#207CCA',
        color: 'white',
      },
      searchField: {
        flex: 1,
        height: '100%',
        padding:'8px 15px',
        border: 'none',
      },
    };
  }

  render() {
    return (
      <form style={this.styles.container}>
        <div style={this.styles.leftSection}>
          <i
            className={"fa fa-search fa-1x"}
            style={this.styles.icon}>
          </i>
        </div>
        <input
          placeholder={'Search'}
          style={this.styles.searchField}>
        </input>
      </form>
    );
  }
}
