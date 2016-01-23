class ConferenceGeneral extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      conference: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var conference = this.props.conference;
    return (
      <div style={StyleConstants.cards.body}>
        <CardAttribute
          action={() => this.storeTemplate('name')}
          editable={this.props.editable}
          label={'Name'}
          value={conference.name} />
        <CardAttribute
          action={() => this.storeTemplate('location')}
          editable={this.props.editable}
          label={'Location'}
          value={conference.location} />
        <CardAttribute
          label={'Start date'}
          value={conference.start_date} />
        <CardAttribute
          label={'End date'}
          value={conference.end_date} />
      </div>
    );
  }
}
