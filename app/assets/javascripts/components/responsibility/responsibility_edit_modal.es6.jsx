class ResponsibilityEditModal extends EditModal {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      schoolables: React.PropTypes.arrayOf(React.PropTypes.object),
      pairing: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    if (event.target === this._node) {
      SchoolActions.closeOverlay();
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateChoice(schoolable) {
    return {
      action: () => SchoolActions.storeValue(schoolable),
      content: schoolable.full_name,
    };
  }

  generateChoices() {
    var schoolables = this.props.schoolables;
    return schoolables.map((schoolable) => this.generateChoice(schoolable));
  }

  generateOptions() {
    return [
      {
        action: () => this.updateResponsibility(),
        icon: TypeConstants.icons.save,
      },
    ];
  }

  updateResponsibility() {
    SchoolActions.updateResponsibility(this.props.pairing);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    var pairing = this.props.pairing;
    return (
      <div style={this.styles.section}>
        <CardHeader
          content={'Responsibility'}
          options={this.generateOptions()} />
        <div style={StyleConstants.cards.content}>
          <CardDropdown
            errors={pairing.errors[pairing.key]}
            label={'User'}
            choices={this.generateChoices()}
            value={pairing.value && pairing.value.full_name} />
        </div>
      </div>
    );
  }
}
