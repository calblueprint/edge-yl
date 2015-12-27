class FormDropdown extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      question: React.PropTypes.object.isRequired,
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
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '18px',
      },
      required: {
        paddingLeft: '4px',
        color: StyleConstants.colors.red,
      },
      section: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
        height: '34px',
        marginLeft: '24px',
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
        flex: '1',
        minHeight: '34px',
        padding: '8px',
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
          top: '6px',
          left: '0px',
          zIndex: StyleConstants.planes.two,
        }
      ),
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateOption(option) {
    return {
      action: () => this.storeResponse(option),
      content: option,
    };
  }

  generateOptions() {
    var options = this.props.question.options;
    return options.map((option) => this.generateOption(option));
  }

  hideDropdown() {
    this.setState({ dropdown: false });
  }

  storeResponse(option) {
    var question = this.props.question;
    FormActions.storeResponse(
      question.section_id,
      question.id,
      option
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderDropdown() {
    if (this.state.dropdown) {
      return (
        <Dropdown
          action={() => this.hideDropdown()}
          options={this.generateOptions()}
          styles={this.dropdownStyles} />
      );
    }
  }

  renderRequired() {
    if (this.props.question.is_required) {
      return <h6 style={this.styles.required}>{'*'}</h6>;
    }
  }

  render() {
    var question = this.props.question;
    return (
      <div style={this.styles.container}>
        <h5>{question.title}</h5>
        {this.renderRequired()}
        <div style={this.styles.section}>
          <Clickable
            action={() => this.setState({ dropdown: true })}
            icon={TypeConstants.icons.expand}
            styles={this.clickableStyles}
            type={'i'}>
            <h6 style={this.styles.selected}>
              {question.value || 'Select one'}
            </h6>
          </Clickable>
          {this.renderDropdown()}
        </div>
      </div>
    );
  }
}
