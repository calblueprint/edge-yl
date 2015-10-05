class Sidebar extends React.Component {

  get styles() {
    return {
      container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 172,
        height: '100%',
        padding: 5,
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
      </div>
    );
  }
}

