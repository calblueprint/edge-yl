class CardDropdown extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      errors: React.PropTypes.array,
      label: React.PropTypes.string.isRequired,
      margin: React.PropTypes.bool,
      options: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          action: React.PropTypes.action,
          content: React.PropTypes.string,
        })
      ).isRequired,
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
  // State
  // --------------------------------------------------
  static get defaultState() {
    return {
      dropdown: false,
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
        <h6>{this.props.label}</h6>
        <DropdownButton
          options={this.props.options}
          value={this.props.value} />
        {this.renderErrors()}
      </div>
    );
  }
}
