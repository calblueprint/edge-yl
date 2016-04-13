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
  renderChild(type) {
    var pairing = this.props.pairing;
    var label = pairing.key;
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
  }

  renderBody() {
    var action;
    var content;
    var type;
    var pairing = this.props.pairing;
    switch (pairing.key) {
      case 'number':
        action = () => RoomActions.updateRoom(pairing);
        content = 'Change Number';
        type = 'input';
        break;
      case 'capacity':
        action = () => RoomActions.updateRoom(pairing);
        content = 'Change Capacity';
        type = 'input';
        break;
    }
    return (
      <div style={this.styles.section}>
        <CardHeader
          content={content}
          options={this.generateOption(action)} />
        <div style={StyleConstants.cards.content}>
          {this.renderChild(type)}
        </div>
      </div>
    );
  }
}
