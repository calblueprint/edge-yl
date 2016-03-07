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
  // Helpers
  // --------------------------------------------------
  storePairing(key) {
    var conference = this.props.conference;
    ConferenceActions.storePairing({
      id: conference.id,
      key: key,
      type: 'input',
      value: conference[key],
    });
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var conference = this.props.conference;
    return (
      <div style={StyleConstants.cards.content}>
        <CardAttribute
          action={() => this.storePairing('name')}
          editable={this.props.editable}
          label={'Name'}
          value={conference.name} />
        <CardAttribute
          action={() => this.storePairing('location')}
          editable={this.props.editable}
          label={'Location'}
          value={conference.location} />
        <CardAttribute
          action={() => this.storePairing('start_date')}
          editable={this.props.editable}
          label={'Start date'}
          value={conference.start_date} />
        <CardAttribute
          action={() => this.storePairing('end_date')}
          editable={this.props.editable}
          label={'End date'}
          value={conference.end_date} />
        <CardAttribute
          label={'Status'}
          value={conference.active ? 'Active' : 'Not active'} />
      </div>
    );
  }
}
