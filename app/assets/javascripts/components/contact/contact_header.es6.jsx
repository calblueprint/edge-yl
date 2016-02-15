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
        position: 'absolute',
        top: '0px',
        right: '0px',
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        display: 'inline-block',
        padding: '8px',
      },
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
          key={index}
          styles={this.clickableStyles}
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
        <div style={this.styles.section}>
          {this.renderOptions()}
        </div>
      </div>
    );
  }
}

