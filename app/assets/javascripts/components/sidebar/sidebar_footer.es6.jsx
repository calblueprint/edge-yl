class SidebarFooter extends Component {

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        alignItems: 'center',
        padding: '0px 12px 12px 12px',
        marginTop: '12px',
      },
    };
  }

  get clickableStyles() {
    return {
      child: {
        width: '16px',
        height: '16px',
      },
      default: {
        marginLeft: '6px',
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
        <h6>{'Powered by'}</h6>
        <Clickable
          styles={this.clickableStyles}
          source={'https://avatars3.githubusercontent.com/u/2729578?v=3&s=200'}
          type={'img'} />
      </div>
    );
  }
}

