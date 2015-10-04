class Header extends React.Component {

  get styles() {
    return {
      container: {
        position: 'fixed',
        width: '100%',
        height: 48,
        backgroundColor: '#68B1DE',
      },
      title: {
        position: 'relative',
        color: '#ffffff',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <span style={this.styles.title}>
          {'edge-yl'}
        </span>
      </div>
    );
  }
}
