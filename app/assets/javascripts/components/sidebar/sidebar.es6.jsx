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
        position: 'fixed',
        top: StyleConstants.heights.header,
        left: '0px',
        zIndex: StyleConstants.planes.eight,
        width: StyleConstants.widths.sidebar,
        paddingLeft: '6px',
        boxSizing: 'border-box',
        transition: 'left 0.375s ease-out',
      },
      hidden: {
        left: '-200px',
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
      <div style={style}>
        <SidebarCategories />
        {this.renderRecents()}
        <SidebarFooter />
      </div>
    );
  }
}
