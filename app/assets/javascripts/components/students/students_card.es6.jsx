class StudentsCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.index,
        this.props.media === 'big' && { width: '49%' },
        this.props.media === 'small' && { width: '100%' }
      ),
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var student = this.props.student;
    return (
      <div style={this.styles.container}>
        <Clickable
          content={`${student.first_name} ${student.last_name}`}
          route={RouteConstants.students.show(student.id)}
          type={'h3'} />
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
        <Clickable
          content={student.school.name}
          route={RouteConstants.schools.show(student.school.id)}
          type={'h5'} />
      </div>
    );
  }
}

