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
    return [
      {
        action: () => ConferenceActions.storeTemplate('group',
          {
            conference_id: this.props.conference.id,
          },
        ),
        content: 'New',
      },
      {
        content: 'All',
        route: '',
      },
    ];
  }

  generateRoomsOptions() {
    return [
      {
        action: () => ConferenceActions.storeTemplate(),
        content: 'New',
      },
      {
        content: 'All',
        route: RouteConstants.rooms.index(),
      },
    ];
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={StyleConstants.containers.grid}>
        <ConferenceCard
          conference={this.props.conference}
          editable={this.props.editable}
          media={this.props.media}
          target={TypeConstants.conference.general} />
        <ConferenceCard
          conference={this.props.conference}
          editable={this.props.editable}
          media={this.props.media}
          target={TypeConstants.conference.statistic} />
        <GridHeader
          label={'Groups in this conference'}
          options={this.generateGroupsOptions()} />
        <GroupsGrid
          editable={this.props.editable}
          groups={this.props.conference.groups}
          media={this.props.media} />
        <GridHeader
          label={'Rooms in this conference'}
          options={this.generateRoomsOptions()} />
        <RoomsGrid
          editable={this.props.editable}
          media={this.props.media}
          rooms={this.props.conference.rooms}
          type={TypeConstants.room.conference} />
      </div>
    );
  }
}
