class FormButton extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      action: React.PropTypes.func.isRequired,
      content: React.PropTypes.string.isRequired,
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
      },
      hover: {
        backgroundColor: StyleConstants.colors.azure,
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <Clickable
        action={this.props.action}
        content={this.props.content}
        styles={this.clickableStyles}
        type={'h6'}
        underline={false} />
    );
  }
}
