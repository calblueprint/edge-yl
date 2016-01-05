class SchoolGeneral extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      school: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  storeTemplate(key) {
    var school = this.props.school;
    SchoolActions.storeTemplate({
      id: school.id,
      key: key,
      model: 'school',
      type: 'input',
      value: school[key],
    });
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var school = this.props.school;
    return (
      <div style={StyleConstants.cards.body}>
        <CardAttribute
          action={() => this.storeTemplate('name')}
          editable={this.props.editable}
          label={'Name'}
          value={school.name} />
        <CardAttribute
          action={() => this.storeTemplate('address_one')}
          editable={this.props.editable}
          label={'Address one'}
          value={school.address_one} />
        <CardAttribute
          action={() => this.storeTemplate('address_two')}
          editable={this.props.editable}
          label={'Address two'}
          value={school.address_two} />
        <CardAttribute
          action={() => this.storeTemplate('address_city')}
          editable={this.props.editable}
          label={'Address city'}
          value={school.address_city} />
        <CardAttribute
          action={() => this.storeTemplate('address_state')}
          editable={this.props.editable}
          label={'Address state'}
          value={school.address_state} />
        <CardAttribute
          action={() => this.storeTemplate('address_zip')}
          editable={this.props.editable}
          label={'Address zip'}
          value={school.address_zip} />
      </div>
    );
  }
}
