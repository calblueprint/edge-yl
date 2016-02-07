class EmailGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      email: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={StyleConstants.grids.column}>
        <EmailHeader email={this.props.email} />
        <EmailBody email={this.props.email} />
      </div>
    );
  }
}
