class CheckinGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
      editable: React.PropTypes.bool.isRequired,
      media: React.PropTypes.string.isRequired,
      pagination: React.PropTypes.object.isRequired,
      results: React.PropTypes.array.isRequired,
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
    var conference = this.props.conference;
    var content = 'Please search for a student to check in.';
    if (this.props.student) {
      return (
        <CheckinStudentGrid
          conference={conference}
          media={this.props.media}
          student={this.props.student} />
      );
    } else if (conference.students_counts) {
      var studentsCounts = conference.students_counts;
      var checkedInCounts = conference.checked_in_counts;
      if (studentsCounts.total - checkedInCounts.total === 0) {
        content = 'All students in this conference have been checked in!';
      }
    }
    return <GridEmpty content={content} />;
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
          search={this.props.search} />
        {this.renderStudent()}
      </div>
    );
  }
}
