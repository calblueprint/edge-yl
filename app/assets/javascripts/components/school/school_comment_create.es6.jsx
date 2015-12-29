class SchoolCommentCreate extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      profile: React.PropTypes.object.isRequired,
      school: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // State
  // --------------------------------------------------
  static get defaultState() {
    return {
      content: '',
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          display: 'flex',
          flexFlow: 'column',
          justifyContent: 'center',
          width: '356px',
        }
      ),
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
      comment: {
        commentable_id: this.props.school.id,
        commentable_type: 'School',
        content: this.state.content,
        user_id: this.props.profile.id,
      },
    };
    SchoolActions.createComment(this.props.school.id, params);
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
          action={() => this.createComment()}
          content={'New Comment'}
          icon={TypeConstants.icons.save} />
        <div style={this.styles.form}>
          <CardInput
            action={this.generateHandler('content')}
            focus={true}
            margin={false}
            placeholder={'Your comment here...'}
            value={''} />
        </div>
      </div>
    );
  }
}
