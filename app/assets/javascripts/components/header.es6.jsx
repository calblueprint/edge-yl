class Header extends React.Component {

  get styles() {
    return {
      container: {
        height: 48,
        backgroundColor: '#68B1DE',
      },
      title: {
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
