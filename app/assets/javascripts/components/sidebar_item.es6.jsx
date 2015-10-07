class SidebarItem extends Component {

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
      label: {
        position: 'relative',
      	textAlign: 'right',
      	fontSize: 25,
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <i className={"fa fa-beer fa-lg"}></i>
        <span style={this.styles.label}>Item!</span>
      </div>
    );
  }
}

