class StudentConference extends Component {

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
  renderGroup() {
    var group = this.props.student.group;
    if (group) {
      return (
        <CardAttribute
          clickable={true}
          label={'Group'}
          route={RouteConstants.groups.show(group.id)}
          type={'h5'}
          value={group.full_name} />
      );
    } else {
      return <CardAttribute label={'Group'} />
    }
  }

  render() {
    return (
      <div style={StyleConstants.cards.content}>
        <h5>{'Status'}</h5>
        <br />
        {this.renderGroup()}
        <br />
        <h5>{'Rooming'}</h5>
      </div>
    );
  }
}
