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
  render() {
    var group = this.props.student.group;
    return (
      <div style={StyleConstants.cards.body}>
        <h4>{'Status'}</h4>
        <br />
        <h4>{'Group'}</h4>
        <h6>{group.name}</h6>
        <br />
        <h4>{'Rooming'}</h4>
      </div>
    );
  }
}
