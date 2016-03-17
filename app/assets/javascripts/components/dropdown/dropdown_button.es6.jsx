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
        StyleConstants.templates.card,
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
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '6px 8px 6px 16px',
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
          backgroundColor: StyleConstants.colors.wash,
        },
      },
      container: Object.assign(
        {},
        StyleConstants.templates.card,
        {
          maxHeight: '172px',
          zIndex: StyleConstants.planes.two,
          overflow: 'scroll',
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
          choices={this.props.choices}
          hide={() => this.setState({ dropdown: false })}
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
          type={'i-right'}>
          <p>{Helpers.humanize(this.props.value) || 'Select one'}</p>
        </Clickable>
        {this.renderDropdown()}
      </div>
    );
  }
}
