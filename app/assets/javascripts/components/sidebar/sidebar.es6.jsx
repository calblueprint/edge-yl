class Sidebar extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      hidden: React.PropTypes.bool.isRequired,
    };
  }

  static get defaultProps() {
    return {
      hidden: true,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        position: 'absolute',
        top: '48px',
        left: '0px',
        width: '172px',
        paddingLeft: '16px',
        transition: 'left 0.375s ease-out',
      },
      hidden: {
        left: '-172px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    // TODO(Warren): Fix when sidebar shows and hides.
    var style = Object.assign(
      {},
      this.styles.container,
      !this.props.hidden && this.styles.hidden
    );
    return (
      <div style={style}>
        <SidebarGroup />
        <SidebarFooter />
      </div>
    );
  }
}
