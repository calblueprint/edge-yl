class SchoolCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      media: React.PropTypes.string.isRequired,
      school: React.PropTypes.object.isRequired,
      target: React.PropTypes.oneOf([
        TypeConstants.school.contact,
        TypeConstants.school.general,
      ]).isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  showOverlay() {
    SchoolActions.storeOverlay(
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
      case TypeConstants.school.contact:
        return <SchoolContact school={this.props.school} />;
      case TypeConstants.school.general:
        return <SchoolGeneral school={this.props.school} />;
    };
  }

  renderTitle() {
    switch (this.props.target) {
      case TypeConstants.school.contact:
        return 'Contact Information';
      case TypeConstants.school.general:
        return 'General Information';
    };
  }

  render() {
    var school = this.props.school;
    return (
      <div style={StyleConstants.cards.index(this.props.media)}>
        <CardHeader
          action={() => this.showOverlay()}
          content={this.renderTitle()}
          icon={TypeConstants.icons.edit} />
        {this.renderBody()}
      </div>
    );
  }
}
