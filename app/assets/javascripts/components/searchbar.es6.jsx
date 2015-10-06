class SearchBar extends Component {

  get styles() {
    return {
      container: {
        position: 'relative',
        height: 36,
        minWidth: 144,
        margin: '0 133',
        color: 'white',
        backgroundColor: 'blue',
      },
      icon: {
        position: 'relative',
        height: 36,
        width: 72,
        display: 'inline-block',
      },
      search_field: {
        width: '100%',
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