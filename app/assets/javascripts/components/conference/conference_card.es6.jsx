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
          <ConferenceStatistic
            conference={this.props.conference} />
        );
    }
  }

  renderTitle() {
    switch (this.props.target) {
      case TypeConstants.conference.general:
        return 'General Information';
      case TypeConstants.conference.statistic:
        return 'Statistic Information';
    };
  }

  render() {
    var conference = this.props.conference;
    return (
      <div style={StyleConstants.cards.show(this.props.media)}>
        <CardHeader content={this.renderTitle()} />
        {this.renderBody()}
      </div>
    );
  }
}
