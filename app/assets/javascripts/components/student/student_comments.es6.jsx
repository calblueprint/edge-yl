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
    };
  }

  renderStudentComment(index, comment) {
    return (
      <StudentComment comment={comment} />
    );
  }

  renderStudentComments() {
    return this.props.comments.map(this.renderStudentComment.bind(this));
  }

  render() {
    var style = Object.assign(
      {},
      this.styles.container
    );
    return (
      <div style={style}>
        {this.renderStudentComments()}
      </div>
    );
  }
}
