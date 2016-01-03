class CardHeader extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      action: React.PropTypes.func.isRequired,
      content: React.PropTypes.string,
      icon: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      content: '',
      icon: '',
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
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderClickable() {
    if (this.props.icon) {
      return (
        <Clickable
          action={this.props.action}
          icon={this.props.icon}
          styles={this.clickableStyles}
          type={'i'} />
      );
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        <h4>{this.props.content}</h4>
        {this.renderClickable()}
      </div>
    );
  }
}

