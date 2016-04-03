class StudentsCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      media: React.PropTypes.string.isRequired,
      student: React.PropTypes.object.isRequired,
      type: React.PropTypes.oneOf([
        TypeConstants.students.default,
        TypeConstants.students.group,
        TypeConstants.students.room,
        TypeConstants.students.school,
      ]).isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  deleteStudentFromGroup() {
    GroupActions.deleteStudent(this.props.student.id);
  }

  generateOptions() {
    return [
      {
        action: () => this.deleteStudentFromGroup(),
        icon: TypeConstants.icons.dekete,
      },
    ];
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderGroup() {
    if (this.props.type !== TypeConstants.students.group) {
      var group = this.props.student.group;
      if (group) {
        return (
          <CardAttribute
            clickable={true}
            label={'Group'}
            route={RouteConstants.groups.show(group.id)}
            type={'h6'}
            value={group.full_name} />
        );
      } else {
        return (
          <CardAttribute
            label={'Group'}
            type={'h6'}
            value={group} />
        );
      }
    }
  }

  renderHeader() {
    if (this.props.editable) {
      return (
        <CardHeader
          content={'Student'}
          option={this.generateOptions()} />
      );
    } else {
      return <CardHeader content={'Student'} />;
    }
  }

  renderSchool() {
    if (this.props.type !== TypeConstants.students.school) {
      var school = this.props.student.school;
      if (school) {
        return (
          <CardAttribute
            clickable={true}
            label={'School'}
            route={RouteConstants.schools.show(school.id)}
            type={'h6'}
            value={school.name} />
        );
      } else {
        return <CardAttribute label={'School'} />;
      }
    }
  }

  renderRoom() {
    if (this.props.type !== TypeConstants.students.room) {
      var room = this.props.student.room;
      if (room) {
        return (
          <CardAttribute
            clickable={true}
            label={'Room'}
            route={RouteConstants.rooms.show(room.id)}
            type={'h6'}
            value={room.full_name} />
        );
      } else {
        return <CardAttribute label={'Room'} />;
      }
    }
  }

  render() {
    var student = this.props.student;
    return (
      <div style={StyleConstants.cards.container(this.props.media)}>
        {this.renderHeader()}
        <div style={StyleConstants.cards.content}>
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
            humanize={false}
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
          {this.renderSchool()}
          {this.renderGroup()}
          {this.renderRoom()}
        </div>
      </div>
    );
  }
}

