class ConferenceGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
      editable: React.PropTypes.bool.isRequired,
      media: React.PropTypes.string.isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateGroupsOptions() {
    var conference = this.props.conference;
    return [
      {
        action: () => ConferenceActions.storeTemplate(
          TypeConstants.models.group,
          { conference_id: conference.id },
        ),
        content: 'New',
      },
      {
        action: () => ConferenceActions.assignStudentsToGroups(conference.id),
        content: 'Assign Students to Groups',
      },
      {
        content: 'All',
        route: RouteConstants.groups.index(conference.id),
      },
    ];
  }

  generateRoomsOptions() {
    return [
      {
        action: () => ConferenceActions.storeTemplate(
          TypeConstants.models.room,
          { conference_id: this.props.conference.id },
        ),
        content: 'New',
      },
      {
        content: 'All',
        route: RouteConstants.rooms.index(this.props.conference.id),
      },
    ];
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var conference = this.props.conference;
    return (
      <div style={StyleConstants.grids.wrap}>
        <ConferenceCard
          conference={conference}
          editable={this.props.editable}
          media={this.props.media}
          target={TypeConstants.conference.general} />
        <ConferenceCard
          conference={conference}
          editable={this.props.editable}
          media={this.props.media}
          target={TypeConstants.conference.statistic} />
        <GridHeader
          label={conference.groups.length + ' Groups in this conference'}
          options={this.generateGroupsOptions()} />
        <GroupsGrid
          editable={this.props.editable}
          groups={conference.groups.slice(0,2)} // Only display the first 2 groups
          media={this.props.media}
          type={TypeConstants.groups.conference} />
        <GridHeader
          label={conference.rooms.length + ' Rooms in this conference'}
          options={this.generateRoomsOptions()} />
        <RoomsGrid
          editable={this.props.editable}
          media={this.props.media}
          rooms={conference.rooms.slice(0,2)} // Only display the first 2 rooms
          type={TypeConstants.rooms.conference} />
      </div>
    );
  }
}
