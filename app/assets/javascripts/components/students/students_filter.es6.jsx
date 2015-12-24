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
        flex: '1',
        zIndex: StyleConstants.planes.two,
      },
    }
  }

  get clickableStyles() {
    return {
      child: {
        paddingRight: '4px',
      },
      default: {
        display: 'flex',
        alignItems: 'center',
        flex: '1',
        minHeight: '44px',
        padding: '12px',
        boxSizing: 'border-box',
      },
    };
  }

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
        StyleConstants.defaults.container,
        {
          top: '4px',
          left: '0px',
          zIndex: StyleConstants.planes.two,
          margin: '0 12px',
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
          action={() => StudentsActions.storeFilter(filter.key, false)}
          options={this.generateDropdownOptions()}
          styles={this.dropdownStyles} />
      );
    }
  }

  render() {
    var filter = this.props.filter;
    return (
      <div style={this.styles.container}>
        <Clickable
          action={() => StudentsActions.storeFilter(filter.key, true)}
          icon={TypeConstants.icons.expand}
          styles={this.clickableStyles}
          type={'i'}>
          <h6>{`${filter.name}: ${filter.selected}`}</h6>
        </Clickable>
        {this.renderDropdown()}
      </div>
    );
  }
}
