class StudentsFilter extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      filter: React.PropTypes.object.isRequired,
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
    var filter = this.props.filter;
    return {
      action: () => StudentsActions.storeFilter(
        false,
        filter.key,
        choice,
      ),
      content: choice,
    };
  }

  generateChoices() {
    var choices = this.props.filter.choices;
    return choices.map((choice) => this.generateChoice(choice));
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var filter = this.props.filter;
    return (
      <DropdownButton
        choices={this.generateChoices()}
        value={`${filter.name}: ${filter.selected}`} />
    );
  }
}
