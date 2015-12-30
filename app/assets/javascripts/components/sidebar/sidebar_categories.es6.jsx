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
        marginTop: '12px',
        borderBottom: `1px solid ${StyleConstants.colors.gray}`,
      },
      title: {
        padding: '6px 12px',
        marginTop: '12px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.container}>
        <h5 style={this.styles.title}>{'General'}</h5>
        <SidebarItem
          label={'Conferences'}
          icon={TypeConstants.icons.conference}
          route={RouteConstants.conferences.index()} />
        <SidebarItem
          label={'Students'}
          icon={TypeConstants.icons.student}
          route={RouteConstants.students.index()} />
        <SidebarItem
          label={'Schools'}
          icon={TypeConstants.icons.school}
          route={RouteConstants.schools.index()} />
        <SidebarItem
          label={'Volunteers'}
          icon={TypeConstants.icons.volunteer}
          route={RouteConstants.users.index()} />
        <div style={this.styles.divider} />
      </div>
    );
  }
}


