class StudentCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      media: React.PropTypes.string.isRequired,
      student: React.PropTypes.object.isRequired,
      target: React.PropTypes.oneOf([
        TypeConstants.student.contact,
        TypeConstants.student.conference,
        TypeConstants.student.emergency,
        TypeConstants.student.general,
        TypeConstants.student.outreach,
      ]).isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    switch (this.props.target) {
      case TypeConstants.student.conference:
        return (
          <StudentConference
            editable={this.props.editable}
            student={this.props.student} />
        );
      case TypeConstants.student.contact:
        return (
          <StudentContact
            editable={this.props.editable}
            student={this.props.student} />
        );
      case TypeConstants.student.emergency:
        return (
          <StudentEmergency
            editable={this.props.editable}
            student={this.props.student} />
        );
      case TypeConstants.student.general:
        return (
          <StudentGeneral
            editable={this.props.editable}
            student={this.props.student} />
        );
    };
  }

  renderTitle() {
    switch (this.props.target) {
      case TypeConstants.student.contact:
        return 'Contact Information';
      case TypeConstants.student.conference:
        return 'Conference Information';
      case TypeConstants.student.emergency:
        return 'Emergency Information';
      case TypeConstants.student.general:
        return 'General Information';
    };
  }

  render() {
    return (
      <div style={StyleConstants.cards.show(this.props.media)}>
        <CardHeader content={this.renderTitle()} />
        {this.renderBody()}
      </div>
    );
  }
}
