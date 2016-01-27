class DropdownButton extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      choices: React.PropTypes.arrayOf(
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
      container: Object.assign(
        {},
        StyleConstants.containers.card,
        {
          maxHeight: '40px',
        },
      ),
    };
  }

  get clickableStyles() {
    return {
      default: {
        display: 'flex',
        alignItems: 'center',
        padding: '8px 10px 8px 8px',
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
        StyleConstants.containers.card,
        {
          zIndex: StyleConstants.planes.two,
        },
      ),
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderDropdown() {
    if (this.state.dropdown) {
      return (
        <DropdownChoices
          action={() => this.setState({ dropdown: false })}
          choices={this.props.choices}
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
