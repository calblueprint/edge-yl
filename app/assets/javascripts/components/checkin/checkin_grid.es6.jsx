class CheckinGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      media: React.PropTypes.string.isRequired,
      pagination: React.PropTypes.object.isRequired,
      results: React.PropTypes.array.isRequired,
      savedSearch: React.PropTypes.object.isRequired,
      search: React.PropTypes.object.isRequired,
      student: React.PropTypes.object,
    };
  }

  static get defaultProps() {
    return {
      student: null,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderStudent() {
    if (this.props.student) {
      return (
        <CheckInStudentGrid
          conference={this.state.conference}
          media={this.state.media}
          student={this.props.student} />
      );
    } else {
      return (
        <GridEmpty
          content={'Please search for a student to check-in.'}/>
      );
    }
  }

  render() {
    var conference = this.props.conference;
    return (
      <div style={StyleConstants.grids.column}>
        <ConferenceGrid
          conference={conference}
          editable={false}
          media={this.props.media}
          type={TypeConstants.conference.checkin} />
        <CheckinSearch
          pagination={this.props.pagination}
          conference={conference}
          results={this.props.results}
          savedSearch={this.props.savedSearch}
          search={this.props.search} />
        {this.renderStudent()}
      </div>
    );
  }
}
