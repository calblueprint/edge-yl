class DraftGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      draft: React.PropTypes.object.isRequired,
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
          draft={this.props.draft}
          template={this.props.template} />
        <DraftBody
          draft={this.props.draft}
          template={this.props.template} />
      </div>
    );
  }
}
