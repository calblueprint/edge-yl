class RoomCreateModal extends CreateModal {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
      template: React.PropTypes.object.isRequired,
      type: React.PropTypes.oneOf(['conference', 'rooms']).isRequired,
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    if (event.target === this._node) {
      if (this.props.type === 'conference') {
        ConferenceActions.closeOverlay();
      } else if (this.props.type === 'rooms') {
        RoomsActions.closeOverlay();
      }
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  createRoom() {
    if (this.props.type === 'conference') {
      ConferenceActions.createRoom(this.props.template, this.props.conference.id)
    } else if (this.props.type === 'rooms') {
      RoomsActions.createRoom(this.props.template, this.props.conference.id)
    }

  }

  generateChoice(gender) {
    var gender_names = ['Female', 'Male', 'Other']
    if (this.props.type === 'conference') {
      return {
        action: () => ConferenceActions.storeAttribute('gender', gender),
        content: gender_names[gender],
      }
    } else if (this.props.type === 'rooms') {
      return {
        action: () => RoomsActions.storeAttribute('gender', gender),
        content: gender_names[gender],
      }
    }
  }

  generateChoices() {
    var genders = [0, 1, 2];
    return genders.map((gender) => this.generateChoice(gender));
  }

  generateHandler(field) {
    return(event) => {
      var value = event.target.value;
      if (this.props.type === 'conference') {
        ConferenceActions.storeAttribute(field, value);
      } else if (this.props.type === 'rooms') {
        RoomsActions.storeAttribute(field, value)
      }
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
            choices={this.generateChoices()}
            label={'Gender'}
            value={''} />
        </div>
      </div>
    );
  }
}
