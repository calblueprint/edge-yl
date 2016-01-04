class GroupCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      group: React.PropTypes.object.isRequired,
      media: React.PropTypes.string.isRequired,
      target: React.PropTypes.oneOf([
        TypeConstants.group.general,
        TypeConstants.group.leadership,
      ]).isRequired,
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
    switch (this.props.target) {
      case TypeConstants.group.general:
        return (
          <GroupGeneral
            editable={this.props.editable}
            group={this.props.group} />
        );
      case TypeConstants.group.leadership:
        return (
          <GroupLeadership
            editable={this.props.editable}
            group={this.props.group} />
        );
    };
  }

  renderTitle() {
    switch (this.props.target) {
      case TypeConstants.group.general:
        return 'General Information';
      case TypeConstants.group.leadership:
        return 'Leadership Information';
    };
  }

  render() {
    var group = this.props.group;
    return (
      <div style={StyleConstants.cards.show(this.props.media)}>
        <CardHeader
          action={() => this.showOverlay()}
          content={this.renderTitle()} />
        {this.renderBody()}
      </div>
    );
  }
}
