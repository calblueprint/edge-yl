class SidebarCategories extends Component {

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
      },
      divider: {
        marginTop: '16px',
        borderBottom: '1px solid',
        borderColor: StyleConstants.colors.gray,
      },
      title: {
        padding: '0 12px',
        marginTop: '24px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.container}>
        <h3 style={this.styles.title}>{'General'}</h3>
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


