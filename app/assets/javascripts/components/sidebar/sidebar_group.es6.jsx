class SidebarGroup extends Component {

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
      },
      border: {
        marginTop: '14px',
        marginLeft: '14px',
        borderBottom: '1px solid',
        borderColor: StyleConstants.colors.gray,
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.container}>
        <SidebarItem
          label={'Students'}
          icon={'fa fa-pencil fa-lg'}
          route={RouteConstants.students.index()}/>
        <SidebarItem
          label={'Schools'}
          icon={'fa fa-building-o fa-lg'}
          route={RouteConstants.schools.index()}/>
        <SidebarItem
          label={'Volunteers'}
          icon={'fa fa-male fa-lg'}
          route={RouteConstants.users.index}/>
        <div style={this.styles.border} />
      </div>
    );
  }
}


