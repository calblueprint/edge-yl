class DraftGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      email: React.PropTypes.object.isRequired,
      template: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={StyleConstants.containers.grid}>
        <DraftHeader
          email={this.props.email}
          template={this.props.template} />
        <ComposeForm
          email={this.props.email}
          template={this.props.template} />
      </div>
    );
  }
}
