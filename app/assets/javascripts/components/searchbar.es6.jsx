class SearchBar extends React.Component {

  get styles() {
    return {
      container: {
        display: 'flex',
        position: 'absolute',
        left: '200px',
        height: '36px',
        width: '500px',
        margin: 'auto',
        float: 'left',
        backgroundColor: 'red',
      },
      icon: {
        flex: '1',
        display: 'inline-block',
        height: '100%',
        padding: '6px 15px',
        boxSizing: 'border-box',
        backgroundColor: '#207CCA',
        color: 'white',
      },
      search_field: {
        display: 'inline-block',
        flex: '10',
        height: '100%',
        padding:'8px 15px',
        border: 'none',
      }
    }
  }

  render() {
    return (
      <form style={this.styles.container}>
        <div
            style={this.styles.icon}>
          <i className={"fa fa-search fa-1x"} style={this.styles.icon}></i>
        </div>
        <input
          placeholder={'Search'}
          style={this.styles.search_field}>
        </input>
      </form>
    );
  }
}