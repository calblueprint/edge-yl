class PageHeader extends Component {

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
      divider: {
        padding: '0px 6px',
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
  renderFilter() {
    var type = this.props.type;
    if (type === TypeConstants.pages.groups ||
        type === TypeConstants.pages.rooms ||
        type === TypeConstants.pages.students) {
      return (
        <PageFilter
          conference={this.props.conference}
          conferences={this.props.conferences}
          type={this.props.type} />
      );
    }
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

  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.section}>
          <h4 style={this.styles.title}>
            {this.props.title}
          </h4>
          {this.renderFilter()}
        </div>
        <div style={this.styles.section}>
          {this.renderOptions()}
          <DropdownButton
            choices={this.props.choices}
            value={'Special actions'} />
        </div>
      </div>
    );
  }
}
