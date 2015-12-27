class StudentContact extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var student = this.props.student;
    return (
      <div style={StyleConstants.cards.body}>
        <CardAttribute
          label={'Cell phone'}
          value={student.cell_phone} />
        <CardAttribute
          label={'Home phone'}
          value={student.home_phone} />
        <CardAttribute
          label={'Email'}
          value={student.email} />
        <CardAttribute
          label={'Address one'}
          value={student.address_one} />
        <CardAttribute
          label={'Address two'}
          value={student.address_two} />
        <CardAttribute
          label={'Address city'}
          value={student.address_city} />
        <CardAttribute
          label={'Address state'}
          value={student.address_state} />
        <CardAttribute
          label={'Address zip'}
          value={student.address_zip} />
      </div>
    );
  }
}
