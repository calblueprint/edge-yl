class Header extends Component {

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
