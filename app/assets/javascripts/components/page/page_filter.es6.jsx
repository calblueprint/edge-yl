class PageFilter extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
      conferences: React.PropTypes.array.isRequired,
      type: React.PropTypes.oneOf([
        TypeConstants.pages.groups,
        TypeConstants.pages.rooms,
        TypeConstants.pages.students,
      ]).isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateChoice(option) {
    var action = null;
    switch(this.props.type) {
      case TypeConstants.pages.groups:
        action = () => GroupsActions.fetchGroups(option);
        break;
      case TypeConstants.pages.rooms:
        action = () => RoomsActions.fetchRooms(option);
        break;
      case TypeConstants.pages.students:
        action = () => StudentsActions.fetchStudents(option);
        break;
    }
    return {
      action: action,
      content: option.name,
    };
  }

  generateChoices() {
    var conferences = this.props.conferences;
    return conferences.map((option) => this.generateChoice(option));
  }

  render() {
    return (
      <DropdownButton
        choices={this.generateChoices()}
        value={this.props.conference.name} />
    );
  }
}
