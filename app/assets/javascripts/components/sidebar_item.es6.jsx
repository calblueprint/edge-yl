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
        position: 'relative',
        width: '100%',
        padding: '30px',
        boxSizing: 'border-box',
      },
      label: {
        position: 'relative',
        fontSize: '14px',
        paddingLeft: '12px',
      },
      icon: {
        position: 'relative',
        width: '16px',
        height: 'auto',
        color: '#565A5C',
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        flex: '1',
        position: 'relative',
        padding: '14px',
        boxSizing: 'border-box',
        marginLeft: '14px',
        marginTop: '14px',
      },
      hover: {
        backgroundColor: "#C1D6D8"
      }
    };
  }

  render() {
    return (
      <Clickable
        styles = {this.clickableStyles} 
        route = {this.props.route} >
        <i
          style={this.styles.icon}
          className={this.props.icon} />
        <span style={this.styles.label}>{this.props.label}</span>
      </Clickable>
    );
  }
}

