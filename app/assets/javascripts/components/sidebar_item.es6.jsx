class SidebarItem extends React.Component {

	get styles() {
    return {
      container: {
        position: 'relative',
        width: '100%',
        padding: 30,
        borderStyle: 'solid',
        borderColor: 'gray',
        borderWidth: 1,
      },
      textLabel: {
      	textAlign: 'right',
      	fontSize: 25,
      }
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <p style={this.styles.textLabel}> Item! </p>
      </div>
    );
  }
}

