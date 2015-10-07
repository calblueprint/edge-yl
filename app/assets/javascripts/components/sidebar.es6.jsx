class Sidebar extends Component {

  get styles() {
    return {
      container: {
        position: 'absolute',
        top: 0,
        left: 0,
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

