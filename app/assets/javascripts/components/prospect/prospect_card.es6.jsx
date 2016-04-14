class ProspectCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      media: React.PropTypes.string.isRequired,
      prospect: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  storePairing(key) {
    var prospect = this.props.prospect;
    ProspectActions.storePairing({
      id: prospect.id,
      key: key,
      type: 'input',
      model: TypeConstants.models.prospect,
      value: prospect[key],
    });
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------

  render() {
    var prospect = this.props.prospect;
    return (
      <div style={StyleConstants.cards.container(this.props.media)}>
        <CardHeader content={'General Information'} />
        <div style={StyleConstants.cards.content}>
          <CardAttribute
            action={() => this.storePairing('name')}
            editable={this.props.editable}
            label={'Name'}
            value={prospect.name} />
          <CardAttribute
            action={() => this.storePairing('website')}
            editable={this.props.editable}
            label={'Website'}
            value={prospect.website} />
          <CardAttribute
            action={() => this.storePairing('contact_first_name')}
            editable={this.props.editable}
            label={'Contact First Name'}
            value={`${prospect.contact_first_name}`} />
          <CardAttribute
            action={() => this.storePairing('contact_first_name')}
            editable={this.props.editable}
            label={'Contact First Name'}
            value={`${prospect.contact_last_name}`} />
          <CardAttribute
            action={() => this.storePairing('contact_email')}
            editable={this.props.editable}
            label={'Contact email'}
            value={prospect.contact_email} />
          <CardAttribute
            action={() => this.storePairing('contact_phone')}
            editable={this.props.editable}
            label={'Contact phone'}
            value={prospect.contact_phone} />
          <CardAttribute
            action={() => this.storePairing('priority')}
            editable={this.props.editable}
            label={'priority'}
            value={prospect.priority} />
        </div>
      </div>
    );
  }
}
