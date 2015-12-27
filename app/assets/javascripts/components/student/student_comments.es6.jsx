class StudentComments extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      comments: React.PropTypes.array.isRequired,
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
        width: '172px',
        paddingRight: '12px',
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
        paddingRight: '12px',
      },
      default: {
        flex: '1',
        padding: '12px',
        marginTop: '12px',
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
    StudentActions.storeOverlay(
      true,
      TypeConstants.actions.create,
      TypeConstants.overlay.target.comment
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderComment(comment) {
    return (
      <StudentComment
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
          <h5>{'Add comment'}</h5>
        </Clickable>
      </div>
    );
  }
}
