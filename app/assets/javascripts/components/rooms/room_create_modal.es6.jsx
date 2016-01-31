class RoomCreateModal extends CreateModal {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
      template: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // State
  // --------------------------------------------------
  static get defaultState() {
    return {
      capacity: 0,
      gender: 0,
      number: 0,
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    if (event.target === this._node) {
      ConferenceActions.storeOverlay(false);
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  createRoom() {
    ConferenceActions.createRoom(this.props.template)
  }

  generateChoice(gender) {
    var gender_name = 'Female'
    if (gender == 1) {
      gender_name = 'Male';
    } else if (gender == 2)
      gender_name = 'Other';
    return {
      action: () => ConferenceActions.storeAttribute('gender', gender),
      content: gender_name,
   };
  }

  generateChoices() {
    var genders = [0, 1, 2]
    return genders.map((gender) => this.generateChoice(gender));
  }

  generateHandler(field) {
    return(event) => {
      ConferenceActions.storeAttribute(field, event.target.value);
    };
  }

  renderBody() {
    var errors = [];
    return (
      <div style={this.styles.section}>
        <CardHeader
          action={() => this.createRoom()}
          content={'New Room'}
          icon={TypeConstants.icons.save} />
        <div style={StyleConstants.cards.body}>
          <CardInput
            action={this.generateHandler('number')}
            errors={errors}
            focus={true}
            label={'Room Number'}
            placeholder={'1'}
            value={''} />
          <CardInput
            action={this.generateHandler('capacity')}
            errors={errors}
            focus={true}
            label={'Capacity'}
            placeholder={'50'}
            value={''} />
          <CardDropdown
            errors={errors}
            label={'Gender'}
            choices={this.generateChoices()}
            value={''} />
        </div>
      </div>
    );
  }
}
