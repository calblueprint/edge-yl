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
    var students_count = conference.students_count;
    var checked_in = conference.checked_in_count;
    if (checked_in == null) {
      checked_in = {};
      students_count = {};
    }
    return (
      <div style={StyleConstants.cards.content}>
        <CardAttribute
          label={'Females checked-in'}
          value={checked_in.females} />
        <CardAttribute
          label={'Females remaining'}
          value={students_count.females - checked_in.females} />
        <CardAttribute
          label={'Males checked-in'}
          value={checked_in.males} />
        <CardAttribute
          label={'Males remaining'}
          value={students_count.males - checked_in.males} />
        <CardAttribute
          label={'Others checked-in'}
          value={checked_in.others} />
        <CardAttribute
          label={'Others Remaining'}
          value={students_count.others - checked_in.others} />
        <CardAttribute
          label={'Total checked-in'}
          value={checked_in.total} />
        <CardAttribute
          label={'Total Remaining'}
          value={students_count.total - checked_in.total} />
      </div>
    );
  }
}
