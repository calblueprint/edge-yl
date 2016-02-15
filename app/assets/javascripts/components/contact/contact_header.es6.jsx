class ContactHeader extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      content: React.PropTypes.string,
      options: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          action: React.PropTypes.func,
          icon: React.PropTypes.string,
        })
      ),
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
        justifyContent: 'center',
        alignItems: 'center',
        height: '40px',
        borderBottom: 'solid #D6D6D6 1px',
      },
      section: {
        display: 'flex',
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        display: 'inline',
        position: 'absolute',
        top: '0px',
        right: '8px',
        lineHeight: '40px',
      },
      section: {
        display: 'inline',
      }
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderOption(option, index) {
    if (option.icon) {
      return (
        <Clickable
          action={option.action}
          icon={option.icon}
          style={this.clickableStyles.section}
          type={'i'} />
      );
    }
  }

  renderOptions() {
    var options = this.props.options;
    return options.map((option, index) => this.renderOption(option, index));
  }

  render() {
    return (
      <div style={this.styles.container}>
        <h4>{this.props.content}</h4>
        <div style={this.clickableStyles.default}>
          {this.renderOptions()}
        </div>
      </div>
    );
  }
}

