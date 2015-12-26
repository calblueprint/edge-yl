class StudentComment extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      comment: React.PropTypes.object.isRequired,
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
        marginTop: '12px',
        textAlign: 'right',
      },
      divider: {
        marginTop: '12px',
        borderBottom: `1px solid ${StyleConstants.colors.gray}`,
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
        <h6>{comment.content}</h6>
        <h6>{`- ${user.full_name}`}</h6>
        <h6>{comment.updated_at}</h6>
        <div style={this.styles.divider} />
      </div>
    );
  }
}
