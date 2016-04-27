class ImportCard extends Component {

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
        marginTop: '12px',
      },
      header: {
        display: 'flex',
        justifyContent: 'center',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
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
        <ImportStudents
          conference={this.props.conference}
          conferences={this.props.conferences} />
      </div>
    );
  }
}
