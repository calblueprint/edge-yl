class PageComments extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      profile: React.PropTypes.object.isRequired,
      school: React.PropTypes.object,
      student: React.PropTypes.object,
      type: React.PropTypes.oneOf([
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
        position: 'absolute',
        top: '0px',
        right: '0px',
        width: StyleConstants.widths.sidebar,
        padding: '0px 18px 24px 0px',
        textAlign: 'right',
        boxSizing: 'border-box',
      },
      title: {
        marginTop: '12px',
      },
    };
  }

  get clickableStyles() {
    return {
      child: {
        paddingRight: '8px',
      },
      default: {
        flex: '1',
        padding: '12px',
        marginTop: '6px',
        borderRadius: '1px',
        textAlign: 'center',
        boxSizing: 'border-box',
      },
      hover: {
        backgroundColor: StyleConstants.colors.wash,
      }
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick() {
    if (this.props.type === TypeConstants.comments.school) {
      SchoolActions.storeTemplate(
        TypeConstants.models.comment,
        {
          commentable_id: this.props.school.id,
          commentable_type: 'School',
          user_id: this.props.profile.id,
        },
      );
    } else if (this.props.type === TypeConstants.comments.student) {
      StudentActions.storeTemplate(
        TypeConstants.models.comment,
        {
          commentable_id: this.props.student.id,
          commentable_type: 'Student',
          user_id: this.props.profile.id,
        },
      );
    }
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderComment(comment) {
    return (
      <PageComment
        comment={comment}
        key={comment.id} />
    );
  }

  renderComments() {
    var comments;
    if (this.props.type === TypeConstants.comments.school) {
      comments = this.props.school.comments;
    } else if (this.props.type === TypeConstants.comments.student) {
      comments = this.props.student.comments;
    }
    return comments.map((comment) => this.renderComment(comment));
  }

  render() {
    return (
      <div style={this.styles.container}>
        <h5 style={this.styles.title}>{'Comments'}</h5>
        {this.renderComments()}
        <Clickable
          action={() => this.handleClick(event)}
          icon={TypeConstants.icons.create}
          styles={this.clickableStyles}
          type={'i'}>
          <h6>{'Add comment'}</h6>
        </Clickable>
      </div>
    );
  }
}
