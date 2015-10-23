class HeaderSearch extends Component {

  get styles() {
    return {
      container: {
        display: 'flex',
        flex: '1',
        height: '30px',
      },
      section: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '64px',
        backgroundColor: StyleConstants.colors.navy,
        color: 'white',
      },
      input: {
        flex: '1',
        padding:'8px 16px',
        border: 'none',
      },
    };
  }

  render() {
    return (
      <form style={this.styles.container}>
        <div style={this.styles.section}>
          <i
            className={"fa fa-search fa-1x"}
            style={this.styles.icon}>
          </i>
        </div>
        <input
          placeholder={'Search for a student, school, or recruiter'}
          style={this.styles.input}>
        </input>
      </form>
    );
  }
}
