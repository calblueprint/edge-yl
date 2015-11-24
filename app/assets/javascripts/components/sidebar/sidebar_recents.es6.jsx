class SidebarRecents extends Component {

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
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.container}>
        <SidebarItem
          label={'Recent Student'}
          icon={'fa fa-pencil fa-lg'}
          route={RouteConstants.students.show(1)} />
        <SidebarItem
          label={'Recent School'}
          icon={'fa fa-building-o fa-lg'}
          route={RouteConstants.schools.show(1)} />
        <div style={this.styles.divider} />
      </div>
    );
  }
}

