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
          position: 'absolute',
          maxHeight: '172px',
          top: '36px',
          left: '0px',
          zIndex: StyleConstants.planes.two,
          width: '100%',
          boxSizing: 'border-box',
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
      <div style={StyleConstants.templates.card}>
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
