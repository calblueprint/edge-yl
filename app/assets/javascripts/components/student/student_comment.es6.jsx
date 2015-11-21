class StudentComment extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      comment: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      comment: {},
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      content: {
        textAlign: 'right',
      },
      container: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'flex-end',
        paddingTop: '12px',
        marginTop: '16px',
        borderRadius: '1px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var comment = this.props.comment;
    var user = comment.user;
    return (
      <div style={this.styles.container}>
        <h6 style={this.styles.content}>{comment.content}</h6>
        <h6 style={this.styles.content}>
          {`- ${user.first_name} ${user.last_name}`}
        </h6>
        <h6 style={this.styles.content}>
          {comment.updated_at}
        </h6>
      </div>
    );
  }
}
