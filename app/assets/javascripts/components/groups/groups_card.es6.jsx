class GroupsCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      group: React.PropTypes.object.isRequired,
      media: React.PropTypes.string.isRequired,
    };
  }


  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      header: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        marginBottom: '5px',
        borderBottom: 'solid #D6D6D6 1px',
      }
    }
  }

  get clickableStyles() {
    return {
      default: {
        display: 'inline',
        top: '0px',
        paddingBottom: '5px',
      },
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  deleteGroupFromConference() {
    ConferenceActions.deleteGroup(this.props.group.id);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderClickable() {
    if (this.props.editable) {
      return (
        <div style={this.styles.header}>
          <Clickable
            action={() => this.deleteGroupFromConference()}
            icon={TypeConstants.icons.close}
            styles={this.clickableStyles}
            type={'i'} />
        </div>
      );
    }
  }

  renderLeadership(leadership) {
    var user = leadership.user;
    if (user) {
      return (
        <CardAttribute
          clickable={true}
          key={leadership.id}
          label={leadership.style}
          route={RouteConstants.users.show(user.id)}
          type={'h6'}
          value={user.full_name} />
      );
    } else {
      return (
        <CardAttribute
          key={leadership.id}
          label={leadership.style}
          type={'h6'} />
      );
    }
  }

  renderLeaderships() {
    var leaderships = this.props.group.leaderships;
    return leaderships.map((leadership) => this.renderLeadership(leadership));
  }

  render() {
    var group = this.props.group;
    return (
      <div style={StyleConstants.cards.index(this.props.media)}>
      {this.renderClickable()}
        <CardAttribute
          clickable={true}
          label={'Name'}
          route={RouteConstants.groups.show(group.id)}
          type={'h4'}
          value={group.full_name} />
        {this.renderLeaderships()}
      </div>
    );
  }
}
