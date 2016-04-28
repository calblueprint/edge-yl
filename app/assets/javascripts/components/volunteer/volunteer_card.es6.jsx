class VolunteerCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool,
      media: React.PropTypes.string.isRequired,
      type: React.PropTypes.oneOf([
        TypeConstants.volunteer.general,
        TypeConstants.volunteer.leadership,
      ]).isRequired,
      volunteer: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    switch (this.props.type) {
      case TypeConstants.volunteer.general:
        return (
          <VolunteerGeneral
            editable={this.props.editable}
            volunteer={this.props.volunteer} />
        );
      case TypeConstants.volunteer.leadership:
        return (
          <VolunteerLeadership
            volunteer={this.props.volunteer} />
        );
    };
  }

  renderTitle() {
    switch (this.props.type) {
      case TypeConstants.volunteer.general:
        return 'General Information';
      case TypeConstants.volunteer.leadership:
        return 'Leadership Information';
    };
  }
  render() {
    return (
      <div style={StyleConstants.cards.container(this.props.media)}>
        <CardHeader content={this.renderTitle()} />
        {this.renderBody()}
      </div>
    );
  }
}
