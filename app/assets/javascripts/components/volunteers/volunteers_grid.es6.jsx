class VolunteersGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      media: React.PropTypes.string.isRequired,
      volunteers: React.PropTypes.array.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderCard(volunteer) {
    return (
      <VolunteersCard
        key={volunteer.id}
        media={this.props.media}
        volunteer={volunteer} />
    );
  }

  renderCards() {
    return this.props.volunteers.map((volunteer) => this.renderCard(volunteer));
  }

  renderEmpty() {
    if (!this.props.volunteers.length) {
      return (
        <GridEmpty
          content={'There are currently no volunteers.'} />
      );
    }
  }

  render() {
    return (
      <div style={StyleConstants.grids.wrap}>
        {this.renderCards()}
        {this.renderEmpty()}
      </div>
    );
  }
}
