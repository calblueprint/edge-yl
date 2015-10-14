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
    return (
      <div style={this.styles.container}>
        <SidebarItem 
          label={'Students'} 
          icon={'fa fa-pencil fa-lg'} />
        <SidebarItem 
          label={'Schools'}
          icon={'fa fa-building-o fa-lg'} />
        <SidebarItem 
          label={'Volunteers'}
          icon={'fa fa-male fa-lg'} />
      </div>
    );
  }
}

