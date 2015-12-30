class CardDropdown extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      action: React.PropTypes.func.isRequired,
      errors: React.PropTypes.array,
      margin: React.PropTypes.bool,
      value: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      errors: [],
      margin: true,
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
  get dropdownStyles() {
    return {
      child: {
        default: {
          flex: '1',
          padding: '8px',
        },
        hover: {
          backgroundColor: StyleConstants.colors.turquoise,
        },
      },
      container: Object.assign(
        {},
        StyleConstants.containers.card,
        {
          top: '6px',
          left: '0px',
          zIndex: StyleConstants.planes.two,
        }
      ),
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateOption(option) {
    return {
      action: () => this.storeResponse(option),
      content: option,
    };
  }

  generateOptions() {
    var options = [];
    return options.map((option) => this.generateOption(option));
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderDropdown() {
    if (this.state.dropdown) {
      return (
        <Dropdown
          action={() => this.hideDropdown()}
          options={this.generateOptions()}
          styles={this.dropdownStyles} />
      );
    }
  }

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
        <h6>{'Primary leader'}</h6>
        {this.renderDropdown()}
        {this.renderErrors()}
      </div>
    );
  }
}
