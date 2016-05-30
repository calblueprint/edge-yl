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
    return (
      <div style={StyleConstants.cards.content}>
        <CardAttribute
          label={'Females count'}
          value={conference.students_counts.females} />
        <CardAttribute
          label={'Males count'}
          value={conference.students_counts.males} />
        <CardAttribute
          label={'Others count'}
          value={conference.students_counts.others} />
        <CardAttribute
          label={'Students count'}
          value={conference.students_counts.total} />
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
