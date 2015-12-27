class StudentsCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      media: React.PropTypes.string.isRequired,
      student: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var student = this.props.student;
    return (
      <div style={StyleConstants.cards.index(this.props.media)}>
        <CardAttribute
          clickable={true}
          label={'Name'}
          route={RouteConstants.students.show(student.id)}
          type={'h4'}
          value={student.full_name} />
        <CardAttribute
          label={'Cell phone'}
          value={student.cell_phone} />
        <CardAttribute
          label={'Email'}
          value={student.email} />
        <CardAttribute
          label={'Placement'}
          value={student.is_primary ? 'Primary' : 'Secondary'} />
        <CardAttribute
          label={'Flagged?'}
          value={student.is_flagged ? 'Yes' : 'No'} />
        <CardAttribute
          label={'Status'}
          value={student.registration_status} />
        <CardAttribute
          clickable={true}
          label={'School'}
          route={RouteConstants.schools.show(student.school.id)}
          type={'h5'}
          value={student.school.name} />
      </div>
    );
  }
}

