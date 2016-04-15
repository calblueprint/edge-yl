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
        marginTop: '6px',
        borderBottom: `1px solid ${StyleConstants.colors.gray}`,
      },
      title: {
        padding: '0px 12px',
        marginTop: '12px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    first_conference = 1
    return (
      <div style={this.styles.container}>
        <h5 style={this.styles.title}>{'General'}</h5>
        <SidebarItem
          label={'Check-in'}
          icon={TypeConstants.icons.check}
          route={RouteConstants.pages.checkIn(first_conference)} />
        <SidebarItem
          label={'Conferences'}
          icon={TypeConstants.icons.conference}
          route={RouteConstants.conferences.index()} />
        <SidebarItem
          label={'Prospects'}
          icon={TypeConstants.icons.prospect}
          route={RouteConstants.prospects.index()} />
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


