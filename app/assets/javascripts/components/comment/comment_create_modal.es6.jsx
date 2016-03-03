class CommentCreateModal extends CreateModal {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      profile: React.PropTypes.object.isRequired,
      student: React.PropTypes.object,
      template: React.PropTypes.object.isRequired,
      type: React.PropTypes.oneOf([
        TypeConstants.pages.school,
        TypeConstants.pages.student,
      ]).isRequired,
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    if (event.target === this._node) {
      if (this.props.type === TypeConstants.pages.student) {
        StudentActions.closeOverlay();
      } else if (this.props.type === TypeConstants.pages.school) {
        SchoolActions.closeOverlay();
      }
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  createComment() {
    if (this.props.type === TypeConstants.pages.student) {
      StudentActions.createComment(this.props.template);
    } else if (this.props.type === TypeConstants.pages.school) {
      SchoolActions.createComment(this.props.template);
    }
  }

  generateAction() {
    return (event) => {
      var value = event.target.value;
      if (this.props.type === TypeConstants.pages.student) {
        StudentActions.storeAttribute('content', value);
      } else if (this.props.type === TypeConstants.pages.school) {
        SchoolActions.storeAttribute('content', value);
      }
    };
  }

  generateOptions() {
    return [
      {
        action: () => this.createComment(),
        icon: TypeConstants.icons.save,
      },
    ];
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    var template = this.props.template;
    return (
      <div style={this.styles.section}>
        <CardHeader
          content={'New Comment'}
          options={this.generateOptions()} />
        <div style={StyleConstants.cards.content}>
          <CardTextarea
            action={this.generateAction()}
            errors={template.errors.content}
            focus={true}
            label={'Content'}
            placeholder={'Your comment here...'}
            value={template.value} />
        </div>
      </div>
    );
  }
}
