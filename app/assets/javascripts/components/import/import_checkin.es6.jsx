class ImportCheckin extends Component {

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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
    var input = ReactDOM.findDOMNode(this.refs.input);
    var data = new FormData();
    data.append('file', input.files[0]);
    var resolve = (response) => console.log(response);
    Requester.upload(
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
          <h2>{'Import students for checkin'}</h2>
          <p>{'WARNING: Please confirm import with a developer.'}</p>
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
