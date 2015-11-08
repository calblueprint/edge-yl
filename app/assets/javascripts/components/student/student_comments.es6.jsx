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
        position: 'absolute',
        top: '48px',
        right: '0px',
        width: '196px',
      },
      title: {
        marginLeft: '12px',
        marginTop: '12px',
        fontSize: StyleConstants.fonts.sizes.smaller,
      },
    };
  }

  renderStudentComment(comment, index) {
    return (
      <StudentComment comment={comment} key={index} />
    );
  }

  renderStudentComments() {
    return this.props.comments.map(this.renderStudentComment.bind(this));
  }

  render() {
    var style = this.styles.container;
    return (
      <div style={style}>
        <span style={this.styles.title}> Student Comments </span>
        {this.renderStudentComments()}
      </div>
    );
  }
}
