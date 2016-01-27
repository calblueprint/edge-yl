class PageFilter extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conferences: React.PropTypes.array.isRequired,
      type: React.PropTypes.oneOf(['groups', 'rooms']).isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateChoice(option) {
    return {
      action: () => StudentsActions.storeFilter(filter.key, false, option),
      content: 'blah',
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
        value={'Conference name'} />
    );
  }
}
