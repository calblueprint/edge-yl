class PageUnderlay extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      active: React.PropTypes.bool.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        position: 'fixed',
        top: '0px',
        left: '0px',
        zIndex: StyleConstants.planes.eight,
        width: '100vw',
        height: '100vh',
        paddingTop: '48px',
      },
      hidden: {
        display: 'none',
      },
      underlay: {
        flex: '1',
        backgroundColor: StyleConstants.colors.fog,
      }
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var styles = this.styles;
    var style = Object.assign(
      {},
      styles.container,
      !this.props.active && styles.hidden
    );
    return (
      <div style={style}>
        <div style={styles.underlay} />
      </div>
    );
  }
}
