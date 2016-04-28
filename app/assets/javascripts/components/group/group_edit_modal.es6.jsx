class GroupEditModal extends EditModal {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      groupablesUser: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
      groupablesVolunteer: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
      pairing: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    if (event.target === this._node) {
      GroupActions.closeOverlay();
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateChoice(groupable) {
    return {
      action: () => GroupActions.storeValue(groupable),
      content: groupable.full_name,
    };
  }

  generateChoices() {
    var groupablesUser = this.props.groupablesUser;
    var groupables = groupablesUser.concat(this.props.groupablesVolunteer)
    return groupables.map((groupable) => this.generateChoice(groupable));
  }

  generateOption(action) {
    return [
      {
        action: () => action(),
        icon: TypeConstants.icons.save,
      },
    ];
  }

  updateLeadership(pairing) {
    var type;
    if (this.props.groupablesUser.indexOf(pairing.value) >= 0) {
      type = 'User';
    } else {
      type = 'Volunteer';
    }
    GroupActions.updateLeadership(pairing, type);
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
    if (pairing.type === 'dropdown') {
      return (
        <CardDropdown
          errors={pairing.errors[pairing.key]}
          label={label}
          choices={this.generateChoices()}
          value={pairing.value && pairing.value.full_name} />
      );
    } else {
      return (
        <CardInput
          action={(event) => GroupActions.storeValue(event.target.value)}
          errors={pairing.errors[pairing.key]}
          label={label}
          value={pairing.value} />
      );
    }
  }

  renderBody() {
    var action;
    var content;
    var type;
    var pairing = this.props.pairing;
    switch (pairing.key) {
      case 'leadershipable':
        action = () => this.updateLeadership(pairing);
        content = 'Change Leadership';
        type = 'dropdown';
        break;
      case 'letter':
        action = () => GroupActions.updateGroup(pairing);
        content = 'Change Letter';
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
