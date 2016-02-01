class PageFilter extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
      conferences: React.PropTypes.array.isRequired,
      type: React.PropTypes.oneOf(['groups', 'rooms']).isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateChoice(option) {
    var action = null;
    switch(this.props.type) {
      case 'groups':
        action = () => GroupsActions.fetchGroups(option);
        break;
      case 'rooms':
        action = () => RoomsActions.fetchRooms(option);
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
