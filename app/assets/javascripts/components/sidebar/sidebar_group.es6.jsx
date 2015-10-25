class SidebarGroup extends Component {

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
        borderColor: StyleConstants.colors.mist,
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <SidebarItem
          label={'Students'}
          icon={'fa fa-pencil fa-lg'}
          route={RouteConstants.students.index}/>
        <SidebarItem
          label={'Schools'}
          icon={'fa fa-building-o fa-lg'}
          route={RouteConstants.students.index}/>
        <SidebarItem
          label={'Volunteers'}
          icon={'fa fa-male fa-lg'}
          route={RouteConstants.students.index}/>
        <div style={this.styles.border}/>
      </div>
    );
  }
}

