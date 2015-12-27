class Sidebar extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      active: React.PropTypes.bool.isRequired,
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
        position: 'absolute',
        top: '48px',
        left: '0px',
        width: '172px',
        paddingLeft: '12px',
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
      !this.props.active && this.styles.hidden
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
