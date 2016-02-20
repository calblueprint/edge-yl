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
          padding: '12px',
        },
        !toast.active && { display: 'none' },
      ),
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.container}>
        {this.props.toast.content}
      </div>
    );
  }
}
