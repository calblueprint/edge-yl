class ConferenceStatistic extends Component {

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
    var studentsCounts = conference.students_counts ?
                          conference.students_counts :
                          {};
    return (
      <div style={StyleConstants.cards.content}>
        <CardAttribute
          label={'Females count'}
          value={studentsCounts.females} />
        <CardAttribute
          label={'Males count'}
          value={studentsCounts.males} />
        <CardAttribute
          label={'Others count'}
          value={studentsCounts.others} />
        <CardAttribute
          label={'Students count'}
          value={studentsCounts.total} />
        <CardAttribute
          label={'Students without a group'}
          value={conference.groupless_students_count} />
        <CardAttribute
          label={'Students without a room'}
          value={conference.roomless_students_count} />
      </div>
    );
  }
}
