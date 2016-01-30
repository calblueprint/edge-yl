class SchoolCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      media: React.PropTypes.string.isRequired,
      school: React.PropTypes.object.isRequired,
      target: React.PropTypes.oneOf([
        TypeConstants.school.contact,
        TypeConstants.school.general,
      ]).isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    switch (this.props.target) {
      case TypeConstants.school.contact:
        return (
          <SchoolContact
            editable={this.props.editable}
            school={this.props.school} />
        );
      case TypeConstants.school.general:
        return (
          <SchoolGeneral
            editable={this.props.editable}
            school={this.props.school} />
        );
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
      <div style={StyleConstants.cards.wrapper(this.props.media)}>
        <CardHeader content={this.renderTitle()} />
        {this.renderBody()}
      </div>
    );
  }
}
