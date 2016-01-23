class ConferenceEditModal extends EditModal {

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
      ConferenceActions.closeOverlay();
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  updateStudent() {
    ConferenceActions.updateConference(this.props.template);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    var template = this.props.template;
    return (
      <div style={this.styles.section}>
        <CardHeader
          action={() => this.updateStudent()}
          content={'General Information'}
          icon={TypeConstants.icons.save} />
        <div style={StyleConstants.cards.body}>
          <CardInput
            action={(event) => ConferenceActions.storeAttribute(event.target.value)}
            errors={template.errors[template.key]}
            focus={true}
            label={Helpers.humanize(template.key)}
            value={template.value} />
        </div>
      </div>
    );
  }
}
