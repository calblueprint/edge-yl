class RoomCreateModal extends CreateModal {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      template: React.PropTypes.object.isRequired,
      type: React.PropTypes.oneOf([
        TypeConstants.pages.conference,
        TypeConstants.pages.rooms,
      ]).isRequired,
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    if (event.target === this._node) {
      if (this.props.type === TypeConstants.pages.conference) {
        ConferenceActions.closeOverlay();
      } else if (this.props.type === TypeConstants.pages.rooms) {
        RoomsActions.closeOverlay();
      }
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  createRoom() {
    if (this.props.type === TypeConstants.pages.conference) {
      ConferenceActions.createRoom(this.props.template);
    } else if (this.props.type === TypeConstants.pages.rooms) {
      RoomsActions.createRoom(this.props.template);
    }
  }

  generateGenderChoice(gender) {
    if (this.props.type === TypeConstants.pages.conference) {
      return {
        action: () => ConferenceActions.storeAttribute('gender', gender),
        content: gender,
      }
    } else if (this.props.type === TypeConstants.pages.rooms) {
      return {
        action: () => RoomsActions.storeAttribute('gender', gender),
        content: gender,
      };
    }
  }

  generateGenderChoices() {
    var genders = ['female', 'male'];
    return genders.map((gender) => this.generateGenderChoice(gender));
  }

  generateStyleChoice(style) {
    if (this.props.type === TypeConstants.pages.conference) {
      return {
        action: () => ConferenceActions.storeAttribute('style', style),
        content: style,
      };
    } else if (this.props.type === TypeConstants.pages.rooms) {
      return {
        action: () => RoomsActions.storeAttribute('style', style),
        content: style,
      };
    }
  }

  generateStyleChoices() {
    var styles = ['staff', 'student'];
    return styles.map((style) => this.generateStyleChoice(style));
  }

  generateHandler(field) {
    return(event) => {
      var value = event.target.value;
      if (this.props.type === TypeConstants.pages.conference) {
        ConferenceActions.storeAttribute(field, value);
      } else if (this.props.type === TypeConstants.pages.rooms) {
        RoomsActions.storeAttribute(field, value);
      }
    };
  }

  generateOptions() {
    return [
      {
        action: () => this.createRoom(),
        icon: TypeConstants.icons.save,
      },
    ];
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    var template = this.props.template;
    var attributes = template.attributes;
    var errors = template.errors;
    return (
      <div style={this.styles.section}>
        <CardHeader
          content={'New Room'}
          options={this.generateOptions()} />
        <div style={StyleConstants.cards.content}>
          <CardInput
            action={this.generateHandler('number')}
            errors={errors.number}
            focus={true}
            label={'Room Number'}
            placeholder={'1'}
            value={attributes.number} />
          <CardInput
            action={this.generateHandler('building')}
            errors={errors.building}
            label={'Building'}
            placeholder={'critter building'}
            value={attributes.building} />
          <CardInput
            action={this.generateHandler('capacity')}
            errors={errors.capacity}
            label={'Capacity'}
            placeholder={'50'}
            value={attributes.capacity} />
          <CardDropdown
            choices={this.generateGenderChoices()}
            errors={errors.gender}
            label={'Gender'}
            value={attributes.gender} />
          <CardDropdown
            choices={this.generateStyleChoices()}
            errors={errors.style}
            label={'Occupant Type'}
            value={attributes.style} />
        </div>
      </div>
    );
  }
}
