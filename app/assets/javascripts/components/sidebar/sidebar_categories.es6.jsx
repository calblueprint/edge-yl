class SidebarCategories extends Component {

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        paddingTop: '10px',
      },
      divider: {
        marginTop: '16px',
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
        <h3>{'General'}</h3>
        <SidebarItem
          label={'Students'}
          icon={TypeConstants.icons.student}
          route={RouteConstants.students.index()}/>
        <SidebarItem
          label={'Schools'}
          icon={TypeConstants.icons.school}
          route={RouteConstants.schools.index()}/>
        <SidebarItem
          label={'Volunteers'}
          icon={TypeConstants.icons.volunteer}
          route={RouteConstants.users.index}/>
        <div style={this.styles.divider} />
      </div>
    );
  }
}


