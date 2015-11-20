class StudentComments extends Component {

  // --------------------------------------------------
  // Setup
  // --------------------------------------------------
  constructor(props) {
    super(props);
    this._listener = null;
  }

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      id: React.PropTypes.number.isRequired,
    };
  }

  static get defaultProps() {
    return {
      id: null,
    };
  }

  // --------------------------------------------------
  // State
  // --------------------------------------------------
  static get defaultState() {
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
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(StudentCommentsStore.getState());
  }

  componentDidMount() {
    this._listener = StudentCommentsStore.listen((state) => this.setState(state));
    StudentCommentsActions.fetchStudentComments(this.props.id);
  }

  componentWillUnmount() {
    StudentCommentsStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderStudentComment(comment, index) {
    return (
      <StudentComment
        comment={comment}
        key={index} />
    );
  }

  renderStudentComments() {
    return this.state.comments.map((comment, index) => this.renderStudentComment(comment, index));
  }

  render() {
    var style = this.styles.container;
    return (
      <div style={style}>
        <span style={this.styles.title}> Student Comments </span>
        {this.renderStudentComments()}
        <Clickable
          content={"Add Comment"}
          action={() => StudentActions.storeOverlay(true, 'createComment')}
          styles={this.clickableStyles}
          type={'h3'} />
      </div>
    );
  }
}
