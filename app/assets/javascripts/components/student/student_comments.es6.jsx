class StudentComments extends Component {

  // --------------------------------------------------
  // Setup
  // --------------------------------------------------
  constructor(props) {
    super(props);
    this._listener = (state) => this.setState(state);
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
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(StudentCommentsStore.getState());
  }

  componentDidMount() {
    StudentCommentsStore.listen(this._listener);
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
    return (
      <div style={this.styles.container}>
        <h5 style={this.styles.title}>{'Student Comments'}</h5>
        {this.renderStudentComments()}
        <Clickable
          content={"Add Comment"}
          action={() => StudentActions.storeOverlay(true, TypeConstants.overlay.type.create, TypeConstants.overlay.target.comment)}
          styles={this.clickableStyles}
          type={'h3'} />
      </div>
    );
  }
}
