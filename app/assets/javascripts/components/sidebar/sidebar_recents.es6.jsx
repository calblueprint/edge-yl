class SidebarRecents extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      visits: React.PropTypes.array.isRequired,
    };
  }

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
  renderItem(visit, index) {
    var icon;
    var route;
    if (visit.visitable_type === 'Student') {
      icon = TypeConstants.icons.student;
      route = RouteConstants.students.show(visit.visitable_id);
    } else if (visit.visitable_type === 'School') {
      icon = TypeConstants.icons.school;
      route = RouteConstants.schools.show(visit.visitable_id);
    } else {
      icon = TypeConstants.icons.volunteer;
      route = RouteConstants.users.show(visit.visitable_id);
    }
    return (
      <SidebarItem
        key={visit.id}
        label={visit.visitable_name}
        icon={icon}
        route={route} />
    );
  }

  renderItems() {
    return this.props.visits.map((visit) => this.renderItem(visit));
  }

  render() {
    return (
      <div style={this.styles.container}>
        <h4 style={this.styles.title}>{'Recents'}</h4>
        {this.renderItems()}
        <div style={this.styles.divider} />
      </div>
    );
  }
}

