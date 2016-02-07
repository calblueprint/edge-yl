class Sidebar extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      profile: React.PropTypes.object.isRequired,
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
      },
      hidden: {
        left: '-200px',
      },
      wrapper: {
        position: 'fixed',
        top: '0px',
        left: '0px',
        zIndex: StyleConstants.planes.seven,
        width: StyleConstants.widths.sidebar,
        height: '100vh',
        padding: '48px 0px 0px 6px',
        boxSizing: 'border-box',
        overflow: 'scroll',
        transition: 'left 0.375s ease-out',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderRecents() {
    var visits = this.props.profile.visits;
    if (visits && visits.length) {
      return <SidebarRecents visits={visits} />;
    }
  }
  render() {
    var style = Object.assign(
      {},
      this.styles.container,
      !this.props.profile.has_sidebar && this.styles.hidden
    );
    return (
      <div style={this.styles.wrapper}>
        <div style={style}>
          <SidebarCategories />
          {this.renderRecents()}
          <SidebarFooter />
        </div>
      </div>
    );
  }
}
