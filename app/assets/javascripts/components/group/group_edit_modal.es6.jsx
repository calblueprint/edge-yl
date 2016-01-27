class GroupEditModal extends EditModal {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      groupables: React.PropTypes.arrayOf(React.PropTypes.object)
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
  generateOption(groupable) {
    return {
      action: () => GroupActions.storeValue(groupable),
      content: Helpers.humanize(groupable.full_name),
    }
  }

  generateOptions() {
    var groupables = this.props.groupables;
    return groupables.map((groupable) => this.generateOption(groupable));
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  updateGroup() {
    GroupActions.updateGroup(this.props.pairing);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderChild(type) {
    var pairing = this.props.pairing;
    var child = null;
    switch (type) {
      case 'dropdown':
        child = (
          <CardDropdown
            errors={pairing.errors[pairing.key]}
            label={pairing.key}
            options={this.generateOptions()}
            value={pairing.value && pairing.value.full_name} />
        );
        break;
      case 'input':
        child = (
          <CardInput
            action={(event) => GroupActions.storeValue(event.target.value)}
            errors={pairing.errors[pairing.key]}
            label={pairing.key}
            value={pairing.value} />
        );
        break;
    }
    return child;
  }

  renderBody() {
    var pairing = this.props.pairing;
    var action = null;
    var type = null;
    var content = null;
    switch (this.props.pairing.key) {
      case 'user':
        action = () => GroupActions.updateLeadership(pairing);
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
          action={action}
          content={content}
          icon={TypeConstants.icons.save} />
        <div style={StyleConstants.cards.body}>
          {this.renderChild(type)}
        </div>
      </div>
    );
  }
}
