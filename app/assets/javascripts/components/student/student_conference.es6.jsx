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
      return <h6>{group.name}</h6>;
    }
  }
  render() {
    var group = this.props.student.group;
    return (
      <div style={StyleConstants.cards.body}>
        <h5>{'Status'}</h5>
        <br />
        <h5>{'Group'}</h5>
        {this.renderGroup()}
        <br />
        <h5>{'Rooming'}</h5>
      </div>
    );
  }
}
