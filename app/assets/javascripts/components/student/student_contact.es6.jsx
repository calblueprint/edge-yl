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
  storeTemplate(type, key, options) {
    StudentActions.storeTemplate(true, type, key, this.props.student[key]);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var student = this.props.student;
    return (
      <div style={StyleConstants.cards.body}>
        <CardAttribute
          action={() => this.storeTemplate('input', 'cell_phone')}
          editable={this.props.editable}
          label={'Cell phone'}
          value={student.cell_phone} />
        <CardAttribute
          action={() => this.storeTemplate('input', 'home_phone')}
          editable={this.props.editable}
          label={'Home phone'}
          value={student.home_phone} />
        <CardAttribute
          action={() => this.storeTemplate('input', 'email')}
          editable={this.props.editable}
          label={'Email'}
          value={student.email} />
        <CardAttribute
          action={() => this.storeTemplate('input', 'address_one')}
          editable={this.props.editable}
          label={'Address one'}
          value={student.address_one} />
        <CardAttribute
          action={() => this.storeTemplate('input', 'address_two')}
          editable={this.props.editable}
          label={'Address two'}
          value={student.address_two} />
        <CardAttribute
          action={() => this.storeTemplate('input', 'address_city')}
          editable={this.props.editable}
          label={'Address city'}
          value={student.address_city} />
        <CardAttribute
          action={() => this.storeTemplate('input', 'address_state')}
          editable={this.props.editable}
          label={'Address state'}
          value={student.address_state} />
        <CardAttribute
          action={() => this.storeTemplate('input', 'address_zip')}
          editable={this.props.editable}
          label={'Address zip'}
          value={student.address_zip} />
      </div>
    );
  }
}
