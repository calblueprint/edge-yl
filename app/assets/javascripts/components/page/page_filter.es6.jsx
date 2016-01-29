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
    return {
      action: () => RoomsActions.fetchRooms(option),
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
