class Sidebar extends Component {

  static get propTypes() {
    return {
      shouldShow: React.PropTypes.bool.isRequired,
    };
  }

  static get defaultProps() {
    return {
      shouldShow: true,
    };
  }


  get styles() {
    return {
      container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '236px',
      },
      show: {
        left: '-236px',
      },
    };
  }

  render() {
    var style = Object.assign(
      {},
      this.styles.container,
      this.props.shouldShow && this.styles.show
    );
    return (
      <div style={style}>
        <SidebarGroup /> 
        <SidebarGroup />
      </div>
    );
  }
}

