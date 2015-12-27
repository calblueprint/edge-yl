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
    var school = this.props.school;
    return (
      <div style={StyleConstants.cards.body}>
        <h5>{'Primary'}</h5>
        <CardAttribute
          label={'First name'}
          value={school.contact_first_name} />
        <CardAttribute
          label={'Last name'}
          value={school.contact_last_name} />
        <CardAttribute
          label={'Phone number'}
          value={school.contact_phone_number} />
        <CardAttribute
          label={'Title'}
          value={school.contact_title} />
        <br />
        <h5>{'Secondary'}</h5>
        <CardAttribute
          label={'First name'}
          value={school.contact_first_name} />
        <CardAttribute
          label={'Last name'}
          value={school.contact_last_name} />
        <CardAttribute
          label={'Phone number'}
          value={school.contact_phone_number} />
        <CardAttribute
          label={'Title'}
          value={school.contact_title} />
      </div>
    );
  }
}
