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
      container: Object.assign(
        {},
        StyleConstants.cards.show,
        { height: '256px' }
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
      <div style={this.styles.container}>
        <CardHeader
          action={(event) => GroupActions.storeOverlay(true, TypeConstants.overlay.type.edit)}
          content={`Group ${group.name}`}
          icon={TypeConstants.icons.edit} />
        <div style={this.styles.section}>
          <h4>{`Primary Leader: ${group.primary_leader}`}</h4>
          <h4>{`Secondary Leader: ${group.secondary_leader}`}</h4>
          <h4>{`Conference: ${group.conference.id}`}</h4>
          <h4>{`Location: ${group.conference.location}`}</h4>
        </div>
      </div>
    );
  }
}
