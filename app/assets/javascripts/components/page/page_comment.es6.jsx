class PageComment extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      comment: React.PropTypes.object.isRequired,
      editable: React.PropTypes.bool.isRequired,
      type: React.PropTypes.oneOf([
        TypeConstants.comments.prospect,
        TypeConstants.comments.school,
        TypeConstants.comments.student,
      ]).isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'flex-end',
        marginTop: '12px',
      },
      divider: {
        alignSelf: 'stretch',
        marginTop: '12px',
        borderBottom: `1px solid ${StyleConstants.colors.gray}`,
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderClickable() {
    if (this.props.editable) {
      var action;
      var type = this.props.type;
      if (type === TypeConstants.comments.prospect) {
        action = ProspectActions.deleteComment;
      } else if (type === TypeConstants.comments.school) {
        action = SchoolActions.deleteComment;
      } else if (type === TypeConstants.comments.student) {
        action = StudentActions.deleteComment;
      }
      return (
        <Clickable
          action={() => action(this.props.comment.id)}
          icon={TypeConstants.icons.delete}
          styles={this.clickableStyles}
          type={'i-left'} />
      );
    }
  }

  render() {
    var comment = this.props.comment;
    var user = comment.user;
    return (
      <div style={this.styles.container}>
        {this.renderClickable()}
        <p>{comment.content}</p>
        <p>{comment.updated_at}</p>
        <Clickable
          content={user.full_name}
          route={RouteConstants.users.show(user.id)}
          type={'h6'} />
        <div style={this.styles.divider} />
      </div>
    );
  }
}
