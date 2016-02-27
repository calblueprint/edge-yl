class Toast extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      toast: React.PropTypes.shape({
        active: React.PropTypes.bool,
        content: React.PropTypes.string,
        type: React.PropTypes.string,
      }).isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    var toast = this.props.toast;
    return {
      container: Object.assign(
        {},
        {
          position: 'fixed',
          bottom: '0px',
          right: '0px',
          zIndex: StyleConstants.planes.seven,
          padding: '12px 18px',
          margin: '12px',
          color: 'white',
          backgroundColor: StyleConstants.colors.green,
          borderRadius: '1px',
          boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.25)',
          opacity: '1',
          transition: 'opacity 0.25s ease-out',
        },
        !toast.active && { opacity: '0' },
      ),
      content: {
        color: StyleConstants.colors.white,
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.container}>
        <p style={this.styles.content}>
          {this.props.toast.content}
        </p>
      </div>
    );
  }
}
