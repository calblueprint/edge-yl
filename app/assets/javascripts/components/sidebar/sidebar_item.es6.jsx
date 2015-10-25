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
      label: {
        paddingLeft: '12px',
        fontSize: '14px',
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        flex: '1',
        padding: '12px',
        marginLeft: '14px',
        marginTop: '14px',
        borderRadius: '1px',
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
        icon={this.props.icon}
        route={this.props.route}
        styles={this.clickableStyles}>
        <span style={this.styles.label}>
          {this.props.label}
        </span>
      </Clickable>
    );
  }
}

