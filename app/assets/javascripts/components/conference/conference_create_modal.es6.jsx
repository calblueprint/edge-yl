class ConferenceCreateModal extends CreateModal {

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
      ConferencesActions.closeOverlay(false);
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  createConference() {
    ConferencesActions.createConference(this.props.template);
  }

  generateHandler(field) {
    return(event) => {
      ConferencesActions.storeAttribute(field, event.target.value);
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    var template = this.props.template;
    return (
      <div style={this.styles.section}>
        <CardHeader
          action={() => this.createConference()}
          content={'New Conference'}
          icon={TypeConstants.icons.save} />
        <div style={StyleConstants.cards.content}>
          <CardInput
            action={this.generateHandler('name')}
            errors={template.errors.name}
            focus={true}
            label={'Name'}
            value={template.name} />
          <CardInput
            action={this.generateHandler('location')}
            errors={template.errors.location}
            label={'Location'}
            margin={true}
            value={template.location} />
          <CardInput
            action={this.generateHandler('start_date')}
            errors={template.errors.start_date}
            label={'Start date'}
            margin={true}
            type={'date'}
            value={template.start_date} />
          <CardInput
            action={this.generateHandler('end_date')}
            errors={template.errors.end_date}
            label={'End date'}
            margin={true}
            type={'date'}
            value={template.end_date} />
        </div>
      </div>
    );
  }
}
