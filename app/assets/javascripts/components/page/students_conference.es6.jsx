class StudentsConference extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
      conferences: React.PropTypes.array.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.containers.card,
        {
          flexFlow: 'column',
          marginTop: '12px',
        },
      ),
      title: {
        padding: '12px',
      },
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateChoice(conference) {
    return {
      action: () => StudentsActions.fetchStudents(
        conference,
        1,
        {},
      ),
      content: conference.name,
    };
  }

  generateChoices() {
    var conferences = this.props.conferences;
    return conferences.map((conference) => this.generateChoice(conference));
  }

  render() {
    return (
      <div style={this.styles.container}>
        <h5 style={this.styles.title}>{'Conference'}</h5>
        <DropdownButton
          choices={this.generateChoices()}
          value={this.props.conference.name} />
      </div>
    );
  }
}
