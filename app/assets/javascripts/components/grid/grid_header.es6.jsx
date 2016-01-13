class GridHeader extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      label: React.PropTypes.string.isRequired,
      options: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          action: React.PropTypes.func,
          content: React.PropTypes.string,
          route: React.PropTypes.string,
        })
      ),
      value: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      options: [],
      value: '',
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
        display: 'flex',
        flexFlow: 'column',
      },
      options: {
        display: 'flex',
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

  renderValue() {
    if (this.props.value) {
      return <h3>{this.props.value}</h3>;
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.title}>
          <h4>{this.props.label}</h4>
          {this.renderValue()}
        </div>
        <div style={this.styles.options}>
          {this.renderOptions()}
        </div>
      </div>
    );
  }
}
