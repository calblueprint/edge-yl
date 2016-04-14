class ConferenceCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
      editable: React.PropTypes.bool.isRequired,
      media: React.PropTypes.string.isRequired,
      target: React.PropTypes.oneOf([
        TypeConstants.conference.checkin,
        TypeConstants.conference.general,
        TypeConstants.conference.statistic,
      ]).isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    switch (this.props.target) {
      case TypeConstants.conference.general:
        return (
          <ConferenceGeneral
            conference={this.props.conference}
            editable={this.props.editable} />
        );
      case TypeConstants.conference.statistic:
        return (
          <ConferenceStatistic conference={this.props.conference} />
        );
      case TypeConstants.conference.checkin:
        return (
          <ConferenceCheckin conference={this.props.conference} />
        );
    }
  }

  renderTitle() {
    switch (this.props.target) {
      case TypeConstants.conference.general:
        return 'General Information';
      case TypeConstants.conference.statistic:
        return 'Statistic Information';
      case TypeConstants.conference.checkin:
        return 'Check-in Information';
    };
  }

  render() {
    var conference = this.props.conference;
    return (
      <div style={StyleConstants.cards.container(this.props.media)}>
        <CardHeader content={this.renderTitle()} />
        {this.renderBody()}
      </div>
    );
  }
}
