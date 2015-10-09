class SidebarGroup extends React.Component {

  get styles() {
    return {
      container: {
        position: 'relative',
        borderBottom: 'solid #D6D6D6 1px',
      },
    };
  }

  render() {
    return(
      <div style={this.styles.container}>
        <SidebarItem 
          label={'Student'} 
          icon={'fa fa-pencil fa-lg'} />
        <SidebarItem 
          label={'School'}
          icon={'fa fa-building-o fa-lg'} />
        <SidebarItem 
          label={'Staff'}
          icon={'fa fa-male fa-lg'} />
      </div>
    );
  }
}

