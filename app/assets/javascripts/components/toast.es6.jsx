class Toast extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      message: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      message: null,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        {
          position: 'fixed',
          bottom: '0px',
          right: '0px',
        },
        !this.props.message && { display: 'none' },
      ),
    };
  }


  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    console.log(this.props.message);
    return (
      <div style={this.styles.container}>
        {this.props.message}
      </div>
    );
  }
}
