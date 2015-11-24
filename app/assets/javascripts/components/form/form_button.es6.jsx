class FormButton extends Component {

  static get propTypes() {
    return {
      action: React.PropTypes.func,
      content: React.PropTypes.string.isRequired,
      route: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      action: null,
      content: '',
      route: '',
    };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        justifyContent: 'center',
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        padding: '6px 12px',
        backgroundColor: StyleConstants.colors.blue,
        borderRadius: '1px',
        color: StyleConstants.colors.white,
        fontSize: StyleConstants.fonts.sizes.smaller,
      },
      hover: {
        backgroundColor: StyleConstants.colors.azure,
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <Clickable
          styles={this.clickableStyles}
          action={this.props.action}
          content={this.props.content}
          route={this.props.route} />
      </div>
    );
  }
}

