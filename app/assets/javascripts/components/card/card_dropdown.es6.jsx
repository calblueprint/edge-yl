class CardDropdown extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      choices: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          action: React.PropTypes.action,
          content: React.PropTypes.string,
        })
      ).isRequired,
      errors: React.PropTypes.array,
      label: React.PropTypes.string.isRequired,
      margin: React.PropTypes.bool,
      value: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      errors: [],
      margin: false,
      value: '',
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        {
          display: 'flex',
          flexFlow: 'column',
          alignSelf: 'stretch',
        },
        this.props.margin && { marginTop: '12px' }
      ),
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderErrors() {
    var errors = this.props.errors;
    if (errors && errors.length) {
      return (
        <h6 style={this.styles.errors}>
          {errors[0]}
        </h6>
      );
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        <h6>{Helpers.humanize(this.props.label)}</h6>
        <DropdownButton
          choices={this.props.choices}
          value={this.props.value} />
        {this.renderErrors()}
      </div>
    );
  }
}
