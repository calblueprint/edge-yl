class StudentComments extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      comments: React.PropTypes.array.isRequired,
    };
  }

  static get defaultProps() {
    return {
      comments: [],
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
        position: 'absolute',
        top: '48px',
        right: '0px',
        width: '172px',
        paddingRight: '16px',
      },   
      title: {
        paddingTop: '12px',
        marginTop: '16px',
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        flex: '1',
        padding: '12px',
        marginTop: '12px',
        borderRadius: '1px',
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
  handleClick(event) {
    StudentActions.storeOverlay(
      true,
      TypeConstants.overlay.type.create,
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
    return this.props.comments.map((comment) => this.renderComment(comment));
  }

  render() {
    return (
      <div style={this.styles.container}>
        <h5 style={this.styles.title}>{'Student Comments'}</h5>
        {this.renderComments()}
        <Clickable
          content={"Add Comment"}
          action={(event) => this.handleClick(event)}
          styles={this.clickableStyles}
          type={'h3'} />
      </div>
    );
  }
}
