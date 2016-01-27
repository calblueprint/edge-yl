class DropdownButton extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      options: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          action: React.PropTypes.action,
          content: React.PropTypes.string,
        })
      ).isRequired,
      value: React.PropTypes.string,
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
      container: {
        display: 'flex',
        flexFlow: 'column',
        maxHeight: '40px',
        border: `1px solid ${StyleConstants.colors.gray}`,
      },
    };
  }

  get clickableStyles() {
    return {
      child: {
        paddingRight: '4px',
      },
      default: {
        display: 'flex',
        alignItems: 'center',
        padding: '8px',
      },
    };
  }

  get dropdownStyles() {
    return {
      child: {
        default: {
          padding: '8px',
        },
        hover: {
          backgroundColor: StyleConstants.colors.turquoise,
        },
      },
      container: Object.assign(
        {},
        StyleConstants.templates.card,
        {
          display: 'flex',
          flexFlow: 'column',
          top: '0px',
          left: '0px',
          zIndex: StyleConstants.planes.two,
        }
      ),
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderDropdown() {
    if (this.state.dropdown) {
      return (
        <Dropdown
          action={() => this.setState({ dropdown: false })}
          options={this.props.options}
          styles={this.dropdownStyles} />
      );
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        <Clickable
          action={() => this.setState({ dropdown: true })}
          icon={TypeConstants.icons.expand}
          styles={this.clickableStyles}
          type={'i'}>
          <h6>{this.props.value || 'Select one'}</h6>
        </Clickable>
        {this.renderDropdown()}
      </div>
    );
  }
}
