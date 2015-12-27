class SchoolGrid extends Component {

 // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      media: React.PropTypes.string.isRequired,
      school: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={StyleConstants.containers.grid}>
        <SchoolCard
          media={this.props.media}
          school={this.props.school}
          target={TypeConstants.school.general} />
        <SchoolCard
          media={this.props.media}
          school={this.props.school}
          target={TypeConstants.school.contact} />
      </div>
    );
  }
}
