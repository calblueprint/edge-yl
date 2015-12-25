class ConferenceCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
      media: React.PropTypes.string.isRequired,
      target: React.PropTypes.oneOf([
        TypeConstants.conference.general,
        TypeConstants.conference.statistic,
      ]).isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.show,
        this.props.media === 'big' && { width: '49%' },
        this.props.media === 'small' && { width: '100%' }
      ),
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  showOverlay() {
    ConferenceActions.storeOverlay(
      true,
      TypeConstants.actions.edit,
      this.props.target
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    switch (this.props.target) {
      case TypeConstants.conference.general:
        return <ConferenceGeneral conference={this.props.conference} />;
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
      <div style={this.styles.container}>
        <CardHeader
          action={() => this.showOverlay()}
          content={this.renderTitle()}
          icon={TypeConstants.icons.edit} />
        {this.renderBody()}
      </div>
    );
  }
}
