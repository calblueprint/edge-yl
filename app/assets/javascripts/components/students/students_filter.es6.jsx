class StudentsFilter extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      filter: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      filter: {},
    };
  }

  // --------------------------------------------------
  // State
  // --------------------------------------------------
  static get defaultState() {
    return {
      isExpanded: false,
      selectedOption: 'Select one',
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'row',
        margin: '0px 8px',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '200px',
        zIndex: StyleConstants.planes.two,
      },
      selected: {
        paddingLeft: '4px',
      },
    }
  }

  get clickableStyles() {
    return {
        default: {
        alignSelf: 'flex-end',
        borderRadius: '1px',
      },
    };
  }

  get dropdownStyles() {
    return {
      child: {
        default: {
          display: 'flex',
          flex: '1',
          padding: '4px',
        },
        hover: {
          backgroundColor: StyleConstants.colors.turquoise,
        },
      },
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          flex: '1',
          position: 'absolute',
          top: '26px',
          left: '0px',
          zIndex: StyleConstants.planes.two,
          // TODO(Warren): Figure out a way to set width without hardcoded value.
          width: '200px',
        }
      ),
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleBlur(event) {
    this.setState({ isExpanded: false });
  }

  handleExpand() {
    this.setState({ isExpanded: !this.state.isExpanded });
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateHandler(option) {
    return () => this.setState({ selectedOption: option, isExpanded: false});
  }

  generateDropdownOption(option) {
    return {
      action: this.generateHandler(option),
      content: option,
    };
  }

  generateDropdownOptions() {
    var options = this.props.filter.options;
    return options.map((option, index) => this.generateDropdownOption(option, index));
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderDropdown() {
    if (this.state.isExpanded) {
      return (
        <Dropdown
          options={this.generateDropdownOptions()}
          styles={this.dropdownStyles}
          blur={(event) => this.handleBlur(event)} />
      );
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        <span style={this.styles.selected}> {this.state.selectedOption} </span>
        <Clickable
          action={this.handleExpand.bind(this)}
          icon={'fa fa-angle-down'}
          styles={this.clickableStyles}
          type={'i'} />
        {this.renderDropdown()}
      </div>
    );
  }
}
