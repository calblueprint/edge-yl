class SchoolCreateModal extends CreateModal {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      profile: React.PropTypes.object.isRequired,
      school: React.PropTypes.object.isRequired,
      template: React.PropTypes.object.isRequired,
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
  createComment() {
    SchoolActions.createComment(
      this.props.template,
      this.props.profile,
      this.props.school,
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    var template = this.props.template;
    return (
      <div style={this.styles.section}>
        <CardHeader
          action={() => this.createComment()}
          content={'New Comment'}
          icon={TypeConstants.icons.save} />
        <div style={StyleConstants.cards.body}>
          <CardInput
            action={(event) => SchoolActions.storeAttribute(event.target.value)}
            errors={template.errors[template.key]}
            focus={true}
            label={Helpers.humanize(template.key)}
            placeholder={'Your comment here...'}
            value={template.value} />
        </div>
      </div>
    );
  }
}
