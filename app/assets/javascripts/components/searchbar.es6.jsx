class SearchBar extends Component {

  get styles() {
    return {
      container: {
        position: 'absolute',
        left: '460px',
        height: '36px',
        width: '500px',
        display: 'inline',
        float: 'left',
        backgroundColor: 'red',
      },
      icon: {
        display: 'inline',
        padding: '6px 15px',
        backgroundColor: '#207CCA',
        color: 'white',
        height: '100%',
        width: '50px',
      },
      search_field: {
        display: 'inline',
        padding:'8px 15px',
        height: '100%',
        width: '400px',
        border: 'none',
      }
    }
  }

  render() {
    return (
      <form style={this.styles.container}>
        <div type='button'
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