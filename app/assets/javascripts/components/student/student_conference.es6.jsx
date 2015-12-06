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
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
        padding: '12px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  // TODO: Add Student status and Rooming information.
  render() {
    var conference = this.props.student.group.conference;
    var group = this.props.student.group;
    return (
      <div style={this.styles.container}>
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
