class SidebarRecents extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      profile: React.PropTypes.object.isRequired,
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
    if (visit.student) {
      return (
        <SidebarItem
          key={index}
          label={'Recent Student'}
          icon={'fa fa-pencil fa-lg'}
          route={RouteConstants.students.show(1)} />
      );
    } else {
      return (
        <SidebarItem
          key={index}
          label={'Recent School'}
          icon={'fa fa-building-o fa-lg'}
          route={RouteConstants.schools.show(1)} />
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

