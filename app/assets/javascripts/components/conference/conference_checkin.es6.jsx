class ConferenceCheckin extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var conference = this.props.conference;
    var studentsCounts = conference.students_counts;
    var checkedInCounts = conference.checked_in_counts;
    if (!checkedInCounts) {
      checkedInCounts = {};
      studentsCounts = {};
    }
    return (
      <div style={StyleConstants.cards.content}>
        <CardAttribute
          label={'Females checked in'}
          value={checkedInCounts.females} />
        <CardAttribute
          label={'Females remaining'}
          value={studentsCounts.females - checkedInCounts.females} />
        <CardAttribute
          label={'Males checked in'}
          value={checkedInCounts.males} />
        <CardAttribute
          label={'Males remaining'}
          value={studentsCounts.males - checkedInCounts.males} />
        <CardAttribute
          label={'Others checked in'}
          value={checkedInCounts.others} />
        <CardAttribute
          label={'Others remaining'}
          value={studentsCounts.others - checkedInCounts.others} />
        <CardAttribute
          label={'Total checked in'}
          value={checkedInCounts.total} />
        <CardAttribute
          label={'Total remaining'}
          value={studentsCounts.total - checkedInCounts.total} />
      </div>
    );
  }
}
