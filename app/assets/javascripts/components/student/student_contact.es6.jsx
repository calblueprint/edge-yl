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
  // Helpers
  // --------------------------------------------------
  storePairing(key) {
    var student = this.props.student;
    StudentActions.storePairing({
      id: student.id,
      key: key,
      type: 'input',
      value: student[key],
    });
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var student = this.props.student;
    return (
      <div style={StyleConstants.cards.body}>
        <CardAttribute
          action={() => this.storePairing('cell_phone')}
          editable={this.props.editable}
          label={'Cell phone'}
          value={student.cell_phone} />
        <CardAttribute
          action={() => this.storePairing('home_phone')}
          editable={this.props.editable}
          label={'Home phone'}
          value={student.home_phone} />
        <CardAttribute
          action={() => this.storePairing('email')}
          editable={this.props.editable}
          label={'Email'}
          value={student.email} />
        <CardAttribute
          action={() => this.storePairing('address_one')}
          editable={this.props.editable}
          label={'Address one'}
          value={student.address_one} />
        <CardAttribute
          action={() => this.storePairing('address_two')}
          editable={this.props.editable}
          label={'Address two'}
          value={student.address_two} />
        <CardAttribute
          action={() => this.storePairing('address_city')}
          editable={this.props.editable}
          label={'Address city'}
          value={student.address_city} />
        <CardAttribute
          action={() => this.storePairing('address_state')}
          editable={this.props.editable}
          label={'Address state'}
          value={student.address_state} />
        <CardAttribute
          action={() => this.storePairing('address_zip')}
          editable={this.props.editable}
          label={'Address zip'}
          value={student.address_zip} />
      </div>
    );
  }
}
