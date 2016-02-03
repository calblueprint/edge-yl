class SchoolContact extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      school: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var primary_leader = this.props.school.primary_contact;
    return (
      <div style={StyleConstants.cards.body}>
        <h5>{'Primary'}</h5>
        <CardAttribute
          label={'First name'}
          value={primary_leader.first_name} />
        <CardAttribute
          label={'Last name'}
          value={primary_leader.last_name} />
        <CardAttribute
          label={'Phone number'}
          value={primary_leader.phone_number} />
        <CardAttribute
          label={'Title'}
          value={primary_leader.title} />
      </div>
    );
  }
}
