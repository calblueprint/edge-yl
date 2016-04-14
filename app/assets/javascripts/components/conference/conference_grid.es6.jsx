class ConferenceGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
      editable: React.PropTypes.bool.isRequired,
      media: React.PropTypes.string.isRequired,
      type: React.PropTypes.oneOf([
        TypeConstants.conference.checkin,
        TypeConstants.conference.default,
      ]).isRequired,
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
    ];
  }

  generateRoomsOptions() {
    var conference = this.props.conference;
    return [
      {
        action: () => ConferenceActions.storeTemplate(
          TypeConstants.models.room,
          { conference_id: conference.id },
        ),
        content: 'New',
      },
    ];
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var conference = this.props.conference;
    var type = this.props.type;
    if (type === TypeConstants.conference.checkin) {
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
            target={TypeConstants.conference.checkin} />
        </div>
      );
    } else {
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
            options={this.generateGroupsOptions()}
            title={`Groups in this conference (${conference.groups_count} total)`} />
          <GroupsGrid
            editable={this.props.editable}
            groups={conference.groups}
            media={this.props.media}
            type={TypeConstants.groups.conference} />
          <GridHeader
            options={this.generateRoomsOptions()}
            title={`Rooms in this conference (${conference.rooms_count} total)`} />
          <RoomsGrid
            editable={this.props.editable}
            media={this.props.media}
            rooms={conference.rooms}
            type={TypeConstants.rooms.conference} />
        </div>
      );
    }
  }
}
