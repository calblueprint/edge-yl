class Sidebar extends Component {

  get styles() {
    return {
      container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '236px',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <SidebarGroup /> 
        <SidebarGroup />
      </div>
    );
  }
}

