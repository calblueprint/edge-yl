class SidebarFooter extends Component {

  get styles() {
    return {
      container: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        padding: '14px',
        marginTop: '14px',
        marginLeft: '14px',
      },
      label: {
        position: 'relative',
        fontSize: '14px',
        paddingRight: '8px',
      },
      image: {
        position: 'relative',
        width: '18px',
        height: '18px',
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        lineHeight: '0px',
        transition: 'transform 0.75s ease-out',
      },
      hover: {
        transform: 'rotate(720deg)',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <span style={this.styles.label}>{'Powered by'}</span>
        <Clickable
          styles={this.clickableStyles}
          route='http://www.calblueprint.org/'>
          <img
            src='https://avatars3.githubusercontent.com/u/2729578?v=3&s=200'
            style={this.styles.image} />
        </Clickable>
      </div>
    );
  }
}

