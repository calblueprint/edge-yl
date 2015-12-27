class GroupCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      group: React.PropTypes.object.isRequired,
      media: React.PropTypes.string.isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  showOverlay() {
    GroupActions.storeOverlay(
      true,
      TypeConstants.actions.edit,
      this.props.target
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var group = this.props.group;
    return (
      <div style={StyleConstants.cards.show(this.props.media)}>
        <CardHeader
          action={() => this.showOverlay()}
          content={`Group ${group.name}`}
          icon={TypeConstants.icons.edit} />
        <GroupGeneral group={this.props.group} />
      </div>
    );
  }
}
