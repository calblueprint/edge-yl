class CreateComment extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      student: {},
    };
  }

  // --------------------------------------------------
  // State
  // --------------------------------------------------
  static get defaultState() {
    return {
      comment: null,
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

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  createComment() {
    var params = {
      'comment' : {
        'content': this.state.content,
        'user_id' : 1, // TODO (max): fix this to be the current user id
      },
    };
    StudentActions.createComment(this.props.student.id, params);
  }

  generateHandler(field) {
    var state = {};
    return(event) => {
      state[field] = event.target.value;
      this.setState(state);
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var student = this.props.student;
    return (
      <div style={this.styles.container}>
        <CardHeader
          action={(event) => this.createComment()}
          content={'Add a Comment'}
          icon={'fa fa-save fa-lg'} />
        <div style={this.styles.form}>
          <CardInput
            action={this.generateHandler('content')}
            placeholder={'Your Comment Here...'}
            value={''} />
        </div>
      </div>
    );
  }
}
