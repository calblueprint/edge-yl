class SidebarItem extends React.Component {

  static get propTypes() {
    return {
      label: React.PropTypes.string.isRequired,
      icon: React.PropTypes.string.isRequired,
    };
  }

  get styles() {
    return {
      container: {
        position: 'relative',
        width: '100%',
        padding: 30,
      },
      label: {
        position: 'relative',
        fontSize: '14px',
        padding: 20,
      },
      icon: {
        width: 16,
        height: 'auto',
      },   
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <i 
          style={this.styles.icon}
          className={this.props.icon} />
        <span style={this.styles.label}>{this.props.label}</span>
      </div>
    );
  }
}

