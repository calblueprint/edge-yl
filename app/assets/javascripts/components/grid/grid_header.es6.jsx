class GridHeader extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      choices: React.PropTypes.array,
      options: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          action: React.PropTypes.func,
          content: React.PropTypes.oneOfType([
            React.PropTypes.number,
            React.PropTypes.string,
          ]),
          route: React.PropTypes.string,
        })
      ),
      title: React.PropTypes.string.isRequired,
    };
  }

  static get defaultProps() {
    return {
      choices: [],
      options: [],
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
        width: '100%',
        marginTop: '12px',
      },
      section: {
        display: 'flex',
      },
      title: {
        alignSelf: 'center',
        paddingRight: '8px',
      },
    };
  }

  get clickableStyles() {
    return {
      default: Object.assign(
        {},
        StyleConstants.templates.card,
        {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '6px 12px',
        },
      ),
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderChoices() {

  }

  renderOption(option, index) {
    return (
      <Clickable
        action={option.action}
        content={option.content}
        key={index}
        route={option.route}
        styles={this.clickableStyles}
        type={'p'} />
    );
  }

  renderOptions() {
    var options = this.props.options;
    return options.map((option, index) => this.renderOption(option, index));
  }

  renderSection() {

  }

  render() {
    return (
      <div style={this.styles.container}>
        <h4 style={this.styles.title}>
          {this.props.title}
        </h4>
        <div style={this.styles.section}>
          {this.renderOptions()}
          {this.renderChoices()}
        </div>
      </div>
    );
  }
}
