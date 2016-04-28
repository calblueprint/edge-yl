class VolunteerEditModal extends EditModal {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      template: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    if (event.target === this._node) {
      VolunteerActions.closeOverlay();
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateOptions() {
    return [
      {
        action: () => this.updateVolunteer(),
        icon: TypeConstants.icons.save,
      },
    ];
  }

  updateVolunteer() {
    VolunteerActions.updateVolunteer(this.props.template);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderChild() {
    var template = this.props.template;
    if (template.type === 'input') {
      return (
        <CardInput
          action={(event) => VolunteerActions.storeAttribute(event.target.value)}
          errors={template.errors[template.key]}
          focus={true}
          label={template.key}
          type={template.key === 'birthday' ? 'date' : 'text'}
          value={template.value} />
      );
    } else {
      var choices = template.choices.map((choice) =>{
      return {
        action: () => StudentActions.storeAttribute(choice),
        content: choice,
      }});
      return (
        <CardDropdown
          errors={template.errors[template.key]}
          label={template.key}
          choices={choices}
          value={template.value} />
      );
    }
  }

  renderBody() {
    return (
      <div style={this.styles.section}>
        <CardHeader
          content={'Volunteer Information'}
          options={this.generateOptions()} />
        <div style={StyleConstants.cards.content}>
          {this.renderChild()}
        </div>
      </div>
    );
  }
}
