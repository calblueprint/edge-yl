class Header extends React.Component {

  get styles() {
    return {
      container: {
        // display: flex,
        position: 'relative',
        width: '100%',
        height: 48,
        backgroundColor: '#fff',
        padding: 10,
        boxShadow: '0 0 25px 0 rgba(0, 0, 0, 0.15)',
      },
      title: {
        position: 'relative',
        verticalAlign: 'middle',
        color: '#68B1DE',
        fontSize: 25,
      },
      menu_items: {
        // verticalAlign: 'middle',
        // justify-content: flex-end,
        position: 'relative',
        color: '#68B1DE',
        fontSize: 25,
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <span style={this.styles.title}>
          {'Edge Youth Leadership'}
        </span>
        <span style={this.styles.menu_items}>
          {'About'}
          {'Login'}
          {'Signup'}
          {'Contact'}
        </span>
      </div>
    );
  }
}
