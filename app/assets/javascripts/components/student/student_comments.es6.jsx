class StudentComments extends Component {

  static get propTypes() {
    return {
      comments: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    };
  }

  static get defaultProps() {
    return {
      comments: [],
    };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
      },
      title: {
        marginTop: '12px',
        fontSize: StyleConstants.fonts.sizes.smaller,
      }
    };
  }

  renderStudentComment(comment, index) {
    return (
      <StudentComment comment={comment} key={index} />
    );
  }

  renderStudentComments() {
    return this.props.comments.map(this.renderStudentComment.bind(this))
  }

  render() {
    var style = Object.assign(
      {},
      this.styles.container
    );
    return (
      <div style={style}>
        <span style={this.styles.title}> Student Comments </span>
        {this.renderStudentComments()}
      </div>
    );
  }
}
