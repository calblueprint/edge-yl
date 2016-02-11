class HeaderInbox extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      count: React.PropTypes.number.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignSelf: 'stretch',
        padding: '0px 12px',
      },
      count: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '10px',
        right: '6px',
        zIndex: '2',
        width: '14px',
        height: '14px',
        backgroundColor: 'red',
        borderRadius: '25%',
        backgroundColor: '#dc0d17',
        backgroundImage: 'linear-gradient(#fa3c45, #dc0d17)',
      },
      value: {
        color: 'white',
        fontSize: '6px',
        lineHeight: '14px',
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        color: StyleConstants.colors.opaque,
      },
      hover: {
        color: StyleConstants.colors.white,
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderCount() {
    if (this.props.count) {
      return (
        <div style={this.styles.count}>
          <p style={this.styles.value}>{this.props.count}</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        {this.renderCount()}
        <Clickable
          icon={TypeConstants.icons.email}
          route={RouteConstants.emails.index}
          styles={this.clickableStyles}
          type={'i'} />
      </div>
    );
  }
}
