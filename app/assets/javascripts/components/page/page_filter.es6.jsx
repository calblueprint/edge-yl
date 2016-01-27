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
  generateDropdownOption(option) {
    return {
      action: () => StudentsActions.storeFilter(filter.key, false, option),
      content: 'blah',
    };
  }

  generateDropdownOptions() {
    var conferences = this.props.conferences;
    return conferences.map((option) => this.generateDropdownOption(option));
  }

  render() {
    return (
      <DropdownButton
        options={this.generateDropdownOptions()}
        value={'Conference name'} />
    );
  }
}
