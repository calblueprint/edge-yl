class SidebarItem extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      label: React.PropTypes.string.isRequired,
      icon: React.PropTypes.string.isRequired,
      route: React.PropTypes.string.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      content: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      },
    };
  }

  get clickableStyles() {
    return {
      child: {
        paddingRight: '6px',
      },
      default: {
        flex: '1',
        padding: '12px',
        borderRadius: '1px',
        boxSizing: 'border-box',
      },
      hover: {
        backgroundColor: StyleConstants.colors.wash,
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <Clickable
        icon={this.props.icon}
        route={this.props.route}
        styles={this.clickableStyles}
        type={'i'}>
        <h6 style={this.styles.content}>
          {this.props.label}
        </h6>
      </Clickable>
    );
  }
}

