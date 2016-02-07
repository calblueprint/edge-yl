class ConferencesCard extends Component {

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
    var conference = this.props.conference;
    return (
      <div style={StyleConstants.cards.container(this.props.media)}>
        <CardHeader content={'Conference'} />
        <div style={StyleConstants.cards.content}>
          <CardAttribute
            clickable={true}
            label={'Name'}
            route={RouteConstants.conferences.show(conference.id)}
            type={'h4'}
            value={conference.name} />
          <CardAttribute
            label={'Location'}
            value={conference.location} />
          <CardAttribute
            label={'Start date'}
            value={conference.start_date} />
          <CardAttribute
            label={'End date'}
            value={conference.end_date} />
        </div>
      </div>
    );
  }
}
