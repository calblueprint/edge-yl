class CommentCreateModal extends CreateModal {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      profile: React.PropTypes.object.isRequired,
      student: React.PropTypes.object,
      template: React.PropTypes.object.isRequired,
      type: React.PropTypes.oneOf(['school', 'student']).isRequired,
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    if (event.target === this._node) {
      if (this.props.type === 'student') {
        StudentActions.closeOverlay();
      } else if (this.props.type === 'school') {
        SchoolActions.closeOverlay();
      }
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  createComment() {
    if (this.props.type === 'student') {
      StudentActions.createComment(this.props.template);
    } else if (this.props.type === 'school') {
      SchoolActions.createComment(this.props.template);
    }
  }

  generateAction() {
    return (event) => {
      var value = event.target.value;
      if (this.props.type === 'student') {
        StudentActions.storeAttribute('content', value);
      } else if (this.props.type === 'school') {
        SchoolActions.storeAttribute('content', value);
      }
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
          action={() => this.createComment()}
          content={'New Comment'}
          icon={TypeConstants.icons.save} />
        <div style={StyleConstants.cards.content}>
          <CardInput
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
