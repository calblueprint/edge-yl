class SidebarItem extends Component {

  static get propTypes() {
    return {
      label: React.PropTypes.string.isRequired,
      icon: React.PropTypes.string.isRequired,
      route: React.PropTypes.string.isRequired,
    };
  }

  get styles() {
    return {
      container: {
        padding: '30px',
        boxSizing: 'border-box',
      },
      label: {
        paddingLeft: '12px',
        fontSize: StyleConstants.fonts.smaller,
      },
      icon: {
        width: '16px',
        color: StyleConstants.colors.ash,
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        flex: '1',
        padding: '14px',
        marginLeft: '14px',
        marginTop: '14px',
        boxSizing: 'border-box',
      },
      hover: {
        backgroundColor: StyleConstants.colors.highlight,
      },
    };
  }

  render() {
    return (
      <Clickable
        styles={this.clickableStyles}
        route={this.props.route} >
        <i
          style={this.styles.icon}
          className={this.props.icon} />
        <span style={this.styles.label}>{this.props.label}</span>
      </Clickable>
    );
  }
}

