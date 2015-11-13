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

  renderStudentComment(comment, index) {
    return (
      <StudentComment comment={comment} key={index} />
    );
  }

  showCreateOverlay() {
    this.props.showOverlay('create_comment', (comment) => addToComments(comment));
  }

  renderStudentComments() {
    return this.state.comments.map((comment, index) => this.renderStudentComment(comment, index));
  }

  addToComments(comment) {
    this.setState({ comments: this.state.comments.push(comment) });
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
        <Clickable func={() => this.showCreateOverlay()}>Add Comment</Clickable>
      </div>
    );
  }
}
