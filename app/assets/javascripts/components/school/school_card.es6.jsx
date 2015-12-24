class SchoolCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      school: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.show,
        { height: '256px' }
      ),
      section: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '12px',
        flex: '1',
      },
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  showOverlay() {
    SchoolActions.storeOverlay(
      true,
      TypeConstants.overlay.type.edit,
      TypeConstants.overlay.target.preview
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var school = this.props.school;
    return (
      <div style={this.styles.container}>
        <CardHeader
          action={() => this.showOverlay()}
          content={`${school.name}`}
          icon={TypeConstants.icons.edit} />
        <div style={this.styles.section}>
          <h4>{`School Address:`}</h4>
          <h6>{school.address_one}</h6>
          <h6>{`${school.address_city}, ${school.address_state} ${school.address_zip}`}</h6>
          <h4>{`Website:`}</h4>
          <h6>{school.website}</h6>
      </div>
      </div>
    );
  }
}
