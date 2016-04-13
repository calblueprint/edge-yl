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
          value={conference.students_count.females} />
        <CardAttribute
          label={'Males count'}
          value={conference.students_count.males} />
        <CardAttribute
          label={'Others count'}
          value={conference.students_count.others} />
        <CardAttribute
          label={'Students count'}
          value={conference.students_count.total} />
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
