class FormDropdown extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      options: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
      title: React.PropTypes.string.isRequired,
    };
  }

  // --------------------------------------------------
  // State
  // --------------------------------------------------
  static get defaultState() {
    return {
      dropdown: false,
      value: 'Select one',
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
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '250px',
        marginBottom: '20px',
      },
      label: {
        fontSize: StyleConstants.fonts.sizes.smaller,
      },
      selected: {
        width: '130px',
        color: StyleConstants.colors.gray,
      },
      dropdownContainer: {
        display: 'flex',
        flexFlow: 'row',
        padding: '4px',
        border: '1px solid' + StyleConstants.colors.gray,
      },
      icon: {
        padding: '0px 2px',
        color: StyleConstants.colors.gray,
      },
      dropdown: {
        display: 'flex',
        flexFlow: 'column',
      },
    };
  }

  get dropdownStyles() {
    return {
      child: {
        default: {
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
          display: 'flex',
          flexFlow: 'column',
          position:'absolute',
          zIndex: StyleConstants.planes.two,
          top: '19px',
          left: '-5px',
          width: '136px',
        }
      ),
    };
  }

  get clickableStyles() {
    return {
      default: {
        padding: '0px 2px',
      },
      hover: {
      },
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateHandler(item) {
    return function() {
      this.setState({ value: item, dropdown: false});
    }.bind(this);
  }

  generateDropdownOption(item) {
    return {
      action: this.generateHandler(item),
      content: item,
    };
  }

  generateDropdownOptions() {
    return this.props.options.map(this.generateDropdownOption.bind(this));
  }

  hideDropdown() {
    this.setState({ dropdown: false });
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderDropdown() {
    if (this.state.dropdown) {
      return (
        <Dropdown
          action={() => this.hideDropdown()}
          styles={this.dropdownStyles}
          options={this.generateDropdownOptions()} />
      );
    }
  }

  render() {
    return (
      <div style = {this.styles.container}>
        <label style={this.styles.label}>{this.props.title}</label>
          <div style={this.styles.dropdownContainer}>
            <div style={this.styles.dropdown}>
              <span style={this.styles.selected}> {this.state.value} </span>
              {this.renderDropdown()}
            </div>
            <Clickable
              icon={'fa fa-angle-down'}
              styles={this.clickableStyles}
              type={'i'}
            />
          </div>
      </div>
    );
  }
}
