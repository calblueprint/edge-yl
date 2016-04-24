class ImportCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object,
      conferences: React.PropTypes.array.isRequired,
      profile: React.PropTypes.object.isRequired,
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
        marginTop: '12px',
      },
      header: {
        display: 'flex',
        justifyContent: 'center',
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

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var conference = this.props.conference;
    return (
      <div>
        <div ref={'container'} style={this.styles.container}>
          <div style={this.styles.header}>
            <h2>{'Import Schools'}</h2>
          </div>
          <div>
            <form
              action={ApiConstants.imports.schools}
              encType={'multipart/form-data'}
              method={'post'}>
              <input
                accept={'*.csv'}
                name={'upload'}
                type={'file'} />
              <input type={'submit'} />
            </form>
          </div>
        </div>
        <div ref={'container'} style={this.styles.container}>
          <div style={this.styles.header}>
            <h2>{'Import Students and their Schools'}</h2>
          </div>
          <DropdownButton
            choices={this.generateChoices()}
            value={conference ? conference.name : null} />
          <div>
            <form
              action={ApiConstants.imports.students(1)}
              encType={'multipart/form-data'}
              method={'post'}>
              <input
                accept={'*.csv'}
                name={'upload'}
                type={'file'} />
              <input type={'submit'} />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
