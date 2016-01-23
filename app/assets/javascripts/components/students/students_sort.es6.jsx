class StudentsSort extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      sort: React.PropTypes.object.isRequired,
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
        StyleConstants.containers.card,
        {
          zIndex: StyleConstants.planes.two,
          margin: '0 12px',
        },
      ),
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateDropdownOption(option) {
    var sort = this.props.sort;
    return {
      action: () => StudentsActions.storeSort(sort.key, false, option),
      content: option,
    };
  }

  generateDropdownOptions() {
    var options = this.props.sort.options;
    return options.map((option) => this.generateDropdownOption(option));
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderDropdown() {
    var sort = this.props.sort;
    if (sort.active) {
      return (
        <Dropdown
          action={() => StudentsActions.storeSort(sort.key, false)}
          options={this.generateDropdownOptions()}
          styles={this.dropdownStyles} />
      );
    }
  }

  render() {
    var sort = this.props.sort;
    return (
      <div style={this.styles.container}>
        <Clickable
          action={() => StudentsActions.storeSort(sort.key, true)}
          icon={TypeConstants.icons.expand}
          styles={this.clickableStyles}
          type={'i'}>
          <h6>{`${sort.name}: ${sort.selected}`}</h6>
        </Clickable>
        {this.renderDropdown()}
      </div>
    );
  }
}
