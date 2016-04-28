class VolunteerGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      media: React.PropTypes.string.isRequired,
      volunteer: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    volunteer = this.props.volunteer;
    return (
      <div style={StyleConstants.grids.wrap}>
        <VolunteerCard
          editable={this.props.editable}
          media={this.props.media}
          type={TypeConstants.volunteer.general}
          volunteer={volunteer} />
        <VolunteerCard
          editable={this.props.editable}
          media={this.props.media}
          type={TypeConstants.volunteer.leadership}
          volunteer={volunteer} />
      </div>
    );
  }
}
