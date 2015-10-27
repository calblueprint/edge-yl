class FormButton extends Component {

  static get propTypes() {
    return {
      func: React.PropTypes.func,
      content: React.PropTypes.string.isRequired,
      route: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      func: null,
      content: '',
      route: '',
    };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        justifyContent: 'center',
        height: '32px',
      },
    }
  }

  get clickableStyles() {
    return {
      click: {
        backgroundColor: StyleConstants.colors.azure,
        borderBottom: '0px',
      },
      default: {
        padding: '6px 12px',
        backgroundColor: StyleConstants.colors.blue,
        borderBottom: '2px solid',
        borderColor: StyleConstants.colors.indigo,
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
          {...this.props} />
      </div>
    );
  }
}

