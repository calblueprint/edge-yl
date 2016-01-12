class PageComments extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      comments: React.PropTypes.array.isRequired,
      type: React.PropTypes.oneOf([
        TypeConstants.school.comment,
        TypeConstants.student.comment,
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
        paddingRight: '18px',
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
        backgroundColor: StyleConstants.colors.turquoise,
      }
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick() {
    if (this.props.type == TypeConstants.student.comment) {
      StudentActions.storeTemplate({
        key: 'content',
        model: 'comment',
        type: 'input',
      });
    } else {
      SchoolActions.storeTemplate({
        key: 'content',
        model: 'comment',
        type: 'input',
      });
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
    var comments = this.props.comments;
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
