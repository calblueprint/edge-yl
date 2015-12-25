class ConferenceGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
      media: React.PropTypes.string.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={StyleConstants.containers.grid}>
        <ConferenceCard
          conference={this.props.conference}
          media={this.props.media}
          target={TypeConstants.conference.general} />
        <ConferenceCard
          conference={this.props.conference}
          media={this.props.media}
          target={TypeConstants.conference.statistic} />
        <GroupsGrid
          groups={this.props.conference.groups}
          media={this.props.media} />
      </div>
    );
  }
}
