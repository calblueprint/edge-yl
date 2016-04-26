class RoomEditModal extends EditModal {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      groupables: React.PropTypes.arrayOf(React.PropTypes.object),
      pairing: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    if (event.target === this._node) {
      RoomActions.closeOverlay();
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateOption(action) {
    return [
      {
        action: () => action(),
        icon: TypeConstants.icons.save,
      },
    ];
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderChild() {
    var pairing = this.props.pairing;
    var label = pairing.key;
    if (pairing.type === 'input') {
      if (pairing.label) {
        label = pairing.label;
      }
      return (
        <CardInput
          action={(event) => RoomActions.storeValue(event.target.value)}
          errors={pairing.errors[pairing.key]}
          label={label}
          value={pairing.value} />
      );
    } else {
      var choices = pairing.choices.map((choice) =>{
      return {
        action: () =>  RoomActions.storeValue(choice),
        content: choice,
      }});
      return (
        <CardDropdown
          choices={choices}
          errors={pairing.errors[pairing.key]}
          label={pairing.key}
          value={pairing.value} />
      );
    }
  }

  renderBody() {
    var action = () => RoomActions.updateRoom(pairing);
    var content;
    var pairing = this.props.pairing;
    switch (pairing.key) {
      case 'number':
        content = 'Change Number';
        break;
      case 'capacity':
        content = 'Change Capacity';
        break;
      case 'gender':
        content = 'Change Gender';
        break;
    }

    return (
      <div style={this.styles.section}>
        <CardHeader
          content={content}
          options={this.generateOption(action)} />
        <div style={StyleConstants.cards.content}>
          {this.renderChild()}
        </div>
      </div>
    );
  }
}
