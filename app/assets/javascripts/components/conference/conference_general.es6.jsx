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
  storeTemplate(key) {
    var conference = this.props.conference;
    ConferenceActions.storeTemplate({
      id: conference.id,
      key: key,
      model: 'conference',
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
          action={() => this.storeTemplate('start_date')}
          editable={this.props.editable}
          label={'Start date'}
          value={conference.start_date} />
        <CardAttribute
          action={() => this.storeTemplate('end_date')}
          editable={this.props.editable}
          label={'Start date'}
          value={conference.start_date} />
      </div>
    );
  }
}
