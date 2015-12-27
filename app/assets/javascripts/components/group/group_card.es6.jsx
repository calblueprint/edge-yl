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
  renderBody() {
    return <GroupGeneral group={this.props.group} />;
  }

  renderTitle() {
    return 'General Information';
  }

  render() {
    var group = this.props.group;
    return (
      <div style={StyleConstants.cards.show(this.props.media)}>
        <CardHeader
          action={() => this.showOverlay()}
          content={this.renderTitle()}
          icon={TypeConstants.icons.edit} />
        {this.renderBody()}
      </div>
    );
  }
}
