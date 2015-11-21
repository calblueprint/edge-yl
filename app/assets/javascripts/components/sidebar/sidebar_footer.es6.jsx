class SidebarFooter extends Component {

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        alignItems: 'center',
        padding: '12px',
        marginTop: '16px',
      },
      image: {
        width: '20px',
        height: '20px',
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        marginLeft: '8px',
        lineHeight: '0px',
        transition: 'transform 0.75s ease-out',
      },
      hover: {
        transform: 'rotate(720deg)',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.container}>
        <h5>{'Powered by'}</h5>
        <Clickable
          styles={this.clickableStyles}
          type={'img'}>
          <img
            src={'https://avatars3.githubusercontent.com/u/2729578?v=3&s=200'}
            style={this.styles.image} />
        </Clickable>
      </div>
    );
  }
}

