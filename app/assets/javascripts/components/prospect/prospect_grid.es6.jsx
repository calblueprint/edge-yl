class ProspectGrid extends Component {

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateOptions() {
    return [
      {
        action: () => ProspectActions.storeTemplate(
          TypeConstants.models.contact,
          {
            is_primary: false,
            prospect_id: this.props.prospect.id,
          },
        ),
        content: 'New',
      },
    ];
  }

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      media: React.PropTypes.string.isRequired,
      prospect: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var prospect = this.props.prospect;
    return (
      <div style={StyleConstants.grids.wrap}>
        <ProspectCard
          editable={this.props.editable}
          media={this.props.media}
          prospect={prospect} />
      </div>
    );
  }
}
