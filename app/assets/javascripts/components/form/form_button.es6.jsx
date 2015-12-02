class FormButton extends Component {

  static get propTypes() {
    return {
      action: React.PropTypes.func.isRequired,
      content: React.PropTypes.string.isRequired,
    };
  }

  static get defaultProps() {
    return {
      action: null,
      content: '',
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
          action={this.props.action}
          content={this.props.content}
          styles={this.clickableStyles} />
      </div>
    );
  }
}

