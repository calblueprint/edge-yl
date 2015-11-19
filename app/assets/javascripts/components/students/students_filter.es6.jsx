class StudentsFilter extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      options: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    };
  }

  static get defaultProps() {
    return {
      options: [],
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
  handleExpand() {
    this.setState({ isExpanded: !this.state.isExpanded });
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateHandler(item) {
    return () => this.setState({ selectedOption: item });
  }

  generateDropdownOption(item) {
    return {
      content: item,
      func: this.generateHandler(item),
    };
  }

  generateDropdownOptions() {
    return this.props.options.map(this.generateDropdownOption.bind(this));
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderDropdown() {
    if (this.state.isExpanded) {
      return (
        <Dropdown
          options={this.generateDropdownOptions()}
          styles={this.dropdownStyles} />
      );
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
          <span style = {this.styles.selected}> {this.state.selectedOption} </span>
          <Clickable
            action={this.handleExpand.bind(this)}
            icon={'fa fa-angle-down'}
            type={'i'}
            styles={this.clickableStyles} />
        {this.renderDropdown()}
      </div>
    );
  }
}
