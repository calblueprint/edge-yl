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
      wrapper: Object.assign(
        {},
        {
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
        !this.props.profile.has_sidebar && { left: '-200px' },
      ),
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
    return (
      <div style={this.styles.wrapper}>
        <div style={this.styles.container}>
          <SidebarCategories />
          {this.renderRecents()}
          <SidebarFooter />
        </div>
      </div>
    );
  }
}
