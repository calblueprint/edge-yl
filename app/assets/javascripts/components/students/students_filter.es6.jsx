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

  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
      },
      list: Object.assign(
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

  get clickableStyles() {
    return {
      default: {
      },
    };
  }

  handleExpand() {
    this.setState({ isExpanded: !this.state.isExpanded });
  }

  generateHandler(item) {
    return function() {
      this.setState({ selectedOption: item });
    }.bind(this);
  }

  renderOption(item, index) {
    return (
      <Clickable
        content={item}
        func={this.generateHandler(item)}
        key={index}
        styles={this.clickableStyles} />
    );
  }

  renderOptions() {
    return this.props.options.map(this.renderOption.bind(this));
  }

  renderList() {
    if (this.state.isExpanded) {
      return (
        <div style={this.styles.list}>
          {this.renderOptions()}
        </div>
      );
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        <Clickable
          func={this.handleExpand.bind(this)}
          icon={'fa fa-angle-down'}
          styles={this.clickableStyles}
          type={'i'}>
          <span>{this.state.selectedOption}</span>
        </Clickable>
        {this.renderList()}
      </div>
    );
  }
}
