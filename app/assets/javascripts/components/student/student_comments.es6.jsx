class StudentComments extends Component {

  static get propTypes() {
    return {
      id: React.PropTypes.number.isRequired,
      showOverlay: React.PropTypes.func.isRequired,
    };
  }

  static get defaultProps() {
    return {
      id: null,
      showOverlay: null,
    };
  }

  static get defaultState() {
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

  showCreateOverlay() {
    this.props.showOverlay('create_comment');
  }

  renderStudentComment(comment, index) {
    return (
      <StudentComment comment={comment} key={index} />
    );
  }

  renderStudentComments() {
    return this.state.comments.map((comment, index) => this.renderStudentComment(comment, index));
  }

  createCommentRequest(params) {
    resolve = (response) => this.setState({ comments: response });
    Requester.post(ApiConstants.students.comments.create(this.props.id), params, resolve);
  }

  componentDidMount() {
    resolve = (response) => this.setState({ comments: response });
    Requester.get(ApiConstants.students.comments.index(this.props.id), resolve);
  }

  render() {
    var style = this.styles.container;
    return (
      <div style={style}>
        <span style={this.styles.title}> Student Comments </span>
        {this.renderStudentComments()}
        <Clickable func={this.showCreateOverlay.bind(this)}>Add Comment</Clickable>
      </div>
    );
  }
}
