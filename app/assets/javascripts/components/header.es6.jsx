class Header extends Component {

  static get propTypes() {
    return {
      handleSidebarClick: React.PropTypes.func.isRequired,
    };
  }

  static get defaultProps() {
    return {
      handleSidebarClick: null,
    };
  }

  get styles() {
    return {
      container: {
        position: 'relative',
        height: '48px',
        backgroundColor: '#68B1DE',
      },
      title: {
        position: 'relative',
        color: '#ffffff',
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        position: 'relative',
        width: '16px',
        height: '16px',
        padding: '4px',
        color: 'white',
        border: '2px solid white',
        borderRadius: '8px',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <Clickable
          content={'S'}
          func={this.props.handleSidebarClick}
          styles={this.clickableStyles} />
        <span style={this.styles.title}>
          {'edge-yl'}
        </span>
      </div>
    );
  }
}
