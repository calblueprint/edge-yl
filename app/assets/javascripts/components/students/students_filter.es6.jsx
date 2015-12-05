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
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingLeft: '24px',
        zIndex: StyleConstants.planes.two,
      },
    }
  }

  get clickableStyles() {
    return {
      default: {

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
  // Helpers
  // --------------------------------------------------
  generateDropdownOption(option) {
    var filter = this.props.filter;
    return {
      action: () => StudentsActions.storeFilter(filter.key, false, option),
      content: option,
    };
  }

  generateDropdownOptions() {
    var options = this.props.filter.options;
    return options.map((option) => this.generateDropdownOption(option));
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderDropdown() {
    var filter = this.props.filter;
    if (filter.active) {
      return (
        <Dropdown
          blur={(event) => StudentsActions.storeFilter(filter.key, false)}
          options={this.generateDropdownOptions()}
          styles={this.dropdownStyles} />
      );
    }
  }

  render() {
    var filter = this.props.filter;
    return (
      <div style={this.styles.container}>
        <h5>{`${filter.name}: ${filter.selected}`}</h5>
        <Clickable
          action={(event) => StudentsActions.storeFilter(filter.key, true)}
          icon={'fa fa-angle-down'}
          styles={this.clickableStyles}
          type={'i'} />
        {this.renderDropdown()}
      </div>
    );
  }
}
