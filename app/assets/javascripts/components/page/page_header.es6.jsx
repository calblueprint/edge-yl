class PageHeader extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
      conferences: React.PropTypes.array.isRequired,
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
      type: React.PropTypes.oneOf(['groups', 'rooms']).isRequired,
    };
  }

  static get defaultProps() {
    return {
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

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderDivider(index, length) {
    if (index < this.props.options.length - 1) {
      return <h4 style={this.styles.divider}>{'|'}</h4>;
    }
  }

  renderOption(option, index, length) {
    return (
      <div key={index} style={this.styles.section}>
        <Clickable
          action={option.action}
          content={option.content}
          route={option.route}
          type={'h4'} />
        {this.renderDivider(index)}
      </div>
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
          <PageFilter
            conference={this.props.conference}
            conferences={this.props.conferences}
            type={this.props.type} />
        </div>
        <div style={this.styles.section}>
          {this.renderOptions()}
        </div>
      </div>
    );
  }
}
