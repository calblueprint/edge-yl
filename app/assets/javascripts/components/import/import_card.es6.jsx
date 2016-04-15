class ImportCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      profile: React.PropTypes.object.isRequired,
      template: React.PropTypes.object.isRequired,
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
    var template = this.props.template;
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
          <div>
            <form
              action={ApiConstants.imports.students}
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
