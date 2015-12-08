class GroupsCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conferenceId: React.PropTypes.number.isRequired,
      group: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={StyleConstants.cards.index}>
        <Clickable
          content={`Group ${this.props.group.name}`}
          route={RouteConstants.groups.show(this.props.conferenceId, this.props.group.id)}
          type={'h3'} />
      </div>
    );
  }
}
