class CreateComment extends Component {

  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
      callback: React.PropTypes.func.isRequired,
    };
  }

  static get defaultProps() {
    return {
      student: {},
      callback: null,
    };
  }

  static get defaultState() {
    return {
      comment: '',
    };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        width: '356px',
      },
      form: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '12px',
        marginBottom: '18px',
      },
    };
  }

  createCommentRequest() {
    var params = {
      'comment' : {
        'content': this.state.content,
        'user_id' : 1, // TODO (max): fix this to be the current user id
        'student_id': this.props.student.id,
      },
    };
    Requester.post(
      ApiConstants.students.comments.create(this.props.student.id),
      params,
      (response) => this.props.callback(response));
  }

  generateHandler(field) {
    var state = {};
    return(event) => {
      state[field] = event.target.value;
      this.setState(state);
    };
  }

  render() {
    var student = this.props.student;
    return (
      <div style={this.styles.container}>
        <CardHeader
          action={(event) => this.createCommentRequest()}
          content={'Add a Comment'}
          icon={'fa fa-save fa-lg'} />
        <div style={this.styles.form}>
          <CardInput
            action={this.generateHandler('content')}
            placeholder={'Your Comment Here...'}
            value={this.state.comment} />
        </div>
      </div>
    );
  }
}
