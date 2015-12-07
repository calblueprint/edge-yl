class GroupCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      group: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      group: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          display: 'flex',
          flexFlow: 'column',
          height: '256px',
          width: '100%',
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
    var group = this.props.group;
    return (
      <div style={this.styles.group}>
        <CardHeader
          action={(event) => GroupActions.storeOverlay(true, TypeConstants.overlay.type.edit)}
          content={`Group ${group.name}`}
          icon={TypeConstants.icons.edit} />
        <div style={this.styles.section}>
          <h3>{`Primary Leader: ${group.primary_leader}`}</h3>
          <h3>{`Secondary Leader: ${group.secondary_leader}`}</h3>
          <h3>{`Conference: ${group.conference.id}`}</h3>
          <h3>{`Location: ${group.conference.location}`}</h3>
      </div>
      </div>
    );
  }
}
