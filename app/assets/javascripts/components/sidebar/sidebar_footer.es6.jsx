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
    };
  }

  get clickableStyles() {
    return {
      child: {
        width: '18px',
        height: '18px',
      },
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
          source={'https://avatars3.githubusercontent.com/u/2729578?v=3&s=200'}
          type={'img'} />
      </div>
    );
  }
}

