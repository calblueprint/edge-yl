class UserCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      user: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.containers.card,
        {
          height: '256px',
          marginTop: '12px',
        }
      ),
      section: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '12px',
        flex: '1',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var user = this.props.user;
    return (
      <div style={this.styles.container}>
        <CardHeader
          action={() => UserActions.storeOverlay(true, TypeConstants.actions.edit)}
          content={`User ${user.id}`}
          icon={TypeConstants.icons.edit} />
        <div style={this.styles.section}>
          <h5>{`${user.first_name} ${user.last_name}`}</h5>
          <h5>{`Email: ${user.email}`}</h5>
        </div>
      </div>
    );
  }
}
