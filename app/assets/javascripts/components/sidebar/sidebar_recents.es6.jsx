class SidebarRecents extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      profile: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      profile: {},
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
    if (visit.visitable_type === 'Student') {
      return (
        <SidebarItem
          key={index}
          label={visit.visitable_name}
          icon={'fa fa-pencil fa-lg'}
          route={RouteConstants.students.show(visit.visitable_id)} />
      );
    } else {
      return (
        <SidebarItem
          key={index}
          label={visit.visitable_name}
          icon={'fa fa-building-o fa-lg'}
          route={RouteConstants.schools.show(visit.visitable_id)} />
      );
    }
  }

  renderItems() {
    var visits = this.props.profile.visits;
    if (visits) {
      return visits.map((visit, index) => this.renderItem(visit, index));
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        {this.renderItems()}
        <div style={this.styles.divider} />
      </div>
    );
  }
}

