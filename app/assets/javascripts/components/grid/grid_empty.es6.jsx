class GridEmpty extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      content: React.PropTypes.string.isRequired,
    };
  }

  // -----------------------------w---------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={StyleConstants.containers.empty}>
        <p>{this.props.content}</p>
      </div>
    );
  }
}
