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
  generateOptions() {
    return [
      {
        action: () => this.storeOverlay(),
        content: 'New',
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
          options={this.generateOptions()} />
        <GroupsGrid
          groups={this.props.conference.groups}
          media={this.props.media} />
      </div>
    );
  }
}
