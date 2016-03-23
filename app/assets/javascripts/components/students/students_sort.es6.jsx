class StudentsSort extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      sort: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        zIndex: StyleConstants.planes.two,
      },
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateChoice(choice) {
    var sort = this.props.sort;
    return {
      action: () => StudentsActions.storeSort(
        false,
        sort.key,
        choice,
      ),
      content: choice,
    };
  }

  generateChoices() {
    var choices = this.props.sort.choices;
    return choices.map((choice) => this.generateChoice(choice));
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var sort = this.props.sort;
    return (
      <DropdownButton
        choices={this.generateChoices()}
        value={`${sort.name}: ${sort.selected}`} />
    );
  }
}
