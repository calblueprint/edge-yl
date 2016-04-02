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
        TypeConstants.comments.prospect,
        TypeConstants.comments.school,
        TypeConstants.comments.student,
      ]).isRequired,
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    if (event.target === this._node) {
      if (this.props.type === TypeConstants.comments.prospect) {
        ProspectActions.closeOverlay();
      } else if (this.props.type === TypeConstants.comments.school) {
        SchoolActions.closeOverlay();
      } else if (this.props.type === TypeConstants.comments.student) {
        StudentActions.closeOverlay();
      }
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  createComment() {
    if (this.props.type === TypeConstants.comments.prospect) {
      ProspectActions.createComment(this.props.template)
    } else if (this.props.type === TypeConstants.comments.school) {
      SchoolActions.createComment(this.props.template);
    } else if (this.props.type === TypeConstants.comments.student) {
      StudentActions.createComment(this.props.template);
    }
  }

  generateAction() {
    return (event) => {
      var value = event.target.value;
      if (this.props.type === TypeConstants.comments.prospect) {
        ProspectActions.storeAttribute('content', value);
      } else if (this.props.type === TypeConstants.comments.school) {
        SchoolActions.storeAttribute('content', value);
      } else if (this.props.type === TypeConstants.comments.student) {
        StudentActions.storeAttribute('content', value);
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
