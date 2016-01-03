class StudentContact extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
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
          action={() => StudentActions.storeTemplate(
            true,
            'input',
            'cell_phone',
            student.cell_phone
          )}
          editable={this.props.editable}
          label={'Cell phone'}
          value={student.cell_phone} />
        <CardAttribute
          editable={this.props.editable}
          label={'Home phone'}
          value={student.home_phone} />
        <CardAttribute
          editable={this.props.editable}
          label={'Email'}
          value={student.email} />
        <CardAttribute
          editable={this.props.editable}
          label={'Address one'}
          value={student.address_one} />
        <CardAttribute
          editable={this.props.editable}
          label={'Address two'}
          value={student.address_two} />
        <CardAttribute
          editable={this.props.editable}
          label={'Address city'}
          value={student.address_city} />
        <CardAttribute
          editable={this.props.editable}
          label={'Address state'}
          value={student.address_state} />
        <CardAttribute
          editable={this.props.editable}
          label={'Address zip'}
          value={student.address_zip} />
      </div>
    );
  }
}
