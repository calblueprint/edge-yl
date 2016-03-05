class FormDropdown extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      question: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '18px',
      },
      required: {
        paddingLeft: '4px',
        color: StyleConstants.colors.red,
      },
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateChoice(choice) {
    return {
      action: () => this.storeResponse(choice),
      content: choice,
    };
  }

  generateChoices() {
    var options = this.props.question.options;
    return options.map((choice) => this.generateChoice(choice));
  }

  storeResponse(choice) {
    var question = this.props.question;
    FormActions.storeResponse(
      question.page_id,
      question.id,
      choice
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderRequired() {
    if (this.props.question.is_required) {
      return <h6 style={this.styles.required}>{'*'}</h6>;
    }
  }

  render() {
    var question = this.props.question;
    return (
      <div style={this.styles.container}>
        <h6>{question.title}</h6>
        {this.renderRequired()}
        <DropdownButton
          choices={this.generateChoices()}
          value={question.value} />
      </div>
    );
  }
}
