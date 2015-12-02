class SidebarRecents extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      visits: React.PropTypes.array.isRequired,
    };
  }

  static get defaultProps() {
    return {
      visits: [],
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
        key={index}
        label={visit.visitable_name}
        icon={icon}
        route={route} />
    );
  }

  renderItems() {
    return this.props.visits.map((visit, index) => this.renderItem(visit, index));
  }

  render() {
    return (
      <div style={this.styles.container}>
        <h3>{'Recent'}</h3>
        {this.renderItems()}
        <div style={this.styles.divider} />
      </div>
    );
  }
}

