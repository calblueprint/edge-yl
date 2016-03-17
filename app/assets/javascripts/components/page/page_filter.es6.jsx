class PageFilter extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
      conferences: React.PropTypes.array.isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateChoice(conference) {
    return {
      action: () => StudentsActions.fetchStudents(conference),
      content: conference.name,
    };
  }

  generateChoices() {
    var conferences = this.props.conferences;
    return conferences.map((conference) => this.generateChoice(conference));
  }

  render() {
    return (
      <DropdownButton
        choices={this.generateChoices()}
        value={this.props.conference.name} />
    );
  }
}
