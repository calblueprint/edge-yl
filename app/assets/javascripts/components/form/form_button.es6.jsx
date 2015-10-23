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
        position: 'relative',
        height: '32px',
      },
    }
  }

  get clickableStyles() {
    return {
      click: {
        backgroundColor: StyleConstants.colors.sky,
        borderBottom: '0px',
      },
      default: {
        position: 'relative',
        padding: '6px 12px',
        color: 'white',
        backgroundColor: StyleConstants.colors.blue,
        borderBottom: '2px solid',
        borderColor: StyleConstants.colors.navy,
        borderRadius: '2px',
        fontSize: '14px',
      },
      hover: {
        backgroundColor: StyleConstants.colors.sky,
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

