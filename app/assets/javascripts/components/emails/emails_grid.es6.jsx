class EmailsGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      emails: React.PropTypes.array.isRequired,
      media: React.PropTypes.string.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderCard(email) {
    return (
      <EmailsCard
        email={email}
        media={this.props.media} />
    );
  }

  renderCards() {
    return this.props.emails.map((email) => this.renderCard(email));
  }

  render() {
    return (
      <div style={StyleConstants.grids.column}>
        {this.renderCards()}
      </div>
    );
  }
}
