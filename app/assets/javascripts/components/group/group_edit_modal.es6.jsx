class GroupEditModal extends EditModal {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      groupables: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
      template: React.PropTypes.object.isRequired,
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
      action: () => GroupActions.storeAttribute(groupable),
      content: Helpers.humanize(groupable.full_name),
    }
  }

  generateChoices() {
    var groupables = this.props.groupables;
    return groupables.map((groupable) => this.generateChoice(groupable));
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderChild() {
    var template = this.props.template;
    return (
      <CardDropdown
        errors={template.errors[template.key]}
        label={template.key}
        choices={this.generateChoices()}
        value={template.value && template.value.full_name} />
    );
  }

  renderBody() {
    var template = this.props.template;
    return (
      <div style={this.styles.section}>
        <CardHeader
          action={() => GroupActions.updateLeadership(template)}
          content={'Leadership Information'}
          icon={TypeConstants.icons.save} />
        <div style={StyleConstants.cards.body}>
          {this.renderChild()}
        </div>
      </div>
    );
  }
}
