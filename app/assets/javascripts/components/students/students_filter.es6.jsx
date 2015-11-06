class StudentsFilter extends Component {

  static get propTypes() {
    return {
      options: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    };
  }

  static get defaultProps() {
    return {
      options: [],
    };
  }

  static get defaultState() {
    return {
      isExpanded: false,
      selectedOption: '',
    };
  }

  get dropdownStyles() {
    return {
      child: {
        default: {
          display: 'flex',
          flexFlow: 'column',
          flex: '1',
        },
      },
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          flex: '1',
          position: 'absolute',
          top: '30px',
          left: '0px',
          zIndex: StyleConstants.planes.two,
          // TODO(Warren): Figure out a way to set width without hardcoded value.
          width: '200px',
        }
      ),
    };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
        zIndex: StyleConstants.planes.two,
      }
    }
  }

  handleExpand() {
    this.setState({ isExpanded: !this.state.isExpanded });
  }

  generateHandler(item) {
    return function() {
      this.setState({ selectedOption: item });
    }.bind(this);
  }

  renderDropdownOption(item, index) {
    return {
      content: item,
      func: this.generateHandler(item),
    }
  }

  get dropdownOptions() {
    return this.props.options.map(this.renderDropdownOption.bind(this));
  }

  renderDropdown() {
    if (this.state.isExpanded) {
      return (
        <Dropdown
          options={this.dropdownOptions}
          styles={this.dropdownStyles} />
      );
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        <Clickable
          func={this.handleExpand.bind(this)}
          icon={'fa fa-angle-down'}
          type={'i'}>
          <span>{this.state.selectedOption}</span>
        </Clickable>
        {this.renderDropdown()}
      </div>
    );
  }
}
