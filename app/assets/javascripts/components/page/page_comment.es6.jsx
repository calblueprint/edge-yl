class PageComment extends Component {

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
        alignItems: 'flex-end',
        marginTop: '12px',
      },
      divider: {
        alignSelf: 'stretch',
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
        <p>{comment.content}</p>
        <p>{comment.updated_at}</p>
        <Clickable
          content={user.full_name}
          route={RouteConstants.users.show(user.id)}
          type={'h6'} />
        <div style={this.styles.divider} />
      </div>
    );
  }
}
