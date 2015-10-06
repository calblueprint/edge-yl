class SearchBar extends React.Component {

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
      <div style={this.styles.container}>
        <div style={this.styles.icon}>
          <img src='https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/2x/ic_search_wht_24dp_r1_2x.png'/>
        </div>
        <input 
          placeholder={'Search'}
          style={this.styles.search_field}>
        </input>
      </div>
    );
  }
}