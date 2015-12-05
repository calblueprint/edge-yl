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
        flexFlow: 'column',
        marginLeft: '24px',
        zIndex: StyleConstants.planes.two,
      },
      section: {
        display: 'flex',
        alignItems: 'center',
        flex: '1',
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
          flex: '1',
          padding: '8px',
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
          flex: '1',
          top: '12px',
          left: '0px',
          zIndex: StyleConstants.planes.two,
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
          action={(event) => StudentsActions.storeFilter(filter.key, false)}
          options={this.generateDropdownOptions()}
          styles={this.dropdownStyles} />
      );
    }
  }

  render() {
    var filter = this.props.filter;
    return (
      <div style={this.styles.container}>
        <div style={this.styles.section}>
          <h6>{`${filter.name}: ${filter.selected}`}</h6>
          <Clickable
            action={(event) => StudentsActions.storeFilter(filter.key, true)}
            icon={'fa fa-angle-down'}
            styles={this.clickableStyles}
            type={'i'} />
        </div>
        {this.renderDropdown()}
      </div>
    );
  }
}
