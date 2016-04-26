class ImportStudents extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object,
      conferences: React.PropTypes.array.isRequired,
    };
  }

  static get defaultProps() {
    return {
      conference: null,
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
          padding: '24px',
          marginTop: '24px',
        }
      ),
      footer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '24px',
      },
      header: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '12px',
      },
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateChoice(conference) {
    return {
      action: () => ImportActions.storeConference(conference),
      content: conference.name,
    };
  }

  generateChoices() {
    var conferences = this.props.conferences;
    return conferences.map((conference) => this.generateChoice(conference));
  }

  importData() {
    var conference = this.props.conference;
    var data = new FormData();
    var input = ReactDOM.findDOMNode(this.refs.input);
    data.append('file', input.files[0]);
    var resolve = (response) => console.log(response);
    Requester.post(
      ApiConstants.imports.students(conference.id),
      data,
      resolve,
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var conference = this.props.conference;
    return (
      <div style={this.styles.container}>
        <div style={this.styles.header}>
          <h2>{'Import schools'}</h2>
        </div>
        <h6>{'File'}</h6>
        <input
          accept={'*.csv'}
          ref={'input'}
          type={'file'} />
        <CardDropdown
          choices={this.generateChoices()}
          label={'Conference'}
          margin={true}
          value={conference ? conference.name : null} />
        <div style={this.styles.footer}>
          <FormButton
            action={() => this.importData()}
            content={'Import'} />
        </div>
      </div>
    );
  }
}
