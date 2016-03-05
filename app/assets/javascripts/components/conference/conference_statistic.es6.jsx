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
          value={conference.females_count} />
        <CardAttribute
          label={'Males count'}
          value={conference.males_count} />
        <CardAttribute
          label={'Others count'}
          value={conference.others_count} />
        <CardAttribute
          label={'Students count'}
          value={conference.students_count} />
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
