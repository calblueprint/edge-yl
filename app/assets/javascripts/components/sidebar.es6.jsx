class Sidebar extends React.Component {

  get styles() {
    return {
      container: {
        width: 172,
        height: '100%',
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

