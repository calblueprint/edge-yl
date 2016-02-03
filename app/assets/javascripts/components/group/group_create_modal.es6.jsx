class GroupCreateModal extends CreateModal {

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
      letter: '',
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    if (event.target === this._node) {
      ConferenceActions.closeOverlay();
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  createGroup() {
    var params = {
      conference_id: this.props.conference.id,
      letter: this.state.letter,
    }
    ConferenceActions.createGroup(this.props.template);
  }

  generateHandler(field) {
    return (event) => {
      var value = event.target.value;
      ConferenceActions.storeAttribute(field, value);
    };
  }

  renderBody() {
    var errors = [];
    if (this.props.template.errors) {
      errors = this.props.template.errors['letter']
    }
    return (
      <div style={this.styles.section}>
        <CardHeader
          action={() => this.createGroup()}
          content={'New Group'}
          icon={TypeConstants.icons.save} />
        <div style={StyleConstants.cards.body}>
          <CardInput
            action={this.generateHandler('letter')}
            errors={errors}
            focus={true}
            label={'Group Letter'}
            placeholder={'A'}
            value={''} />
        </div>
      </div>
    );
  }
}
