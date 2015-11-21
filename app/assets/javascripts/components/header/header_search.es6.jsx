class HeaderSearch extends Component {

  // --------------------------------------------------
  // State
  // --------------------------------------------------
  static get defaultState() {
    return { query: '' };
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
        height: '30px',
      },
      input: {
        flex: '1',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '1px',
      },
      logo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '48px',
        backgroundColor: StyleConstants.colors.indigo,
        borderRadius: '1px',
        color: StyleConstants.colors.white,
      },
      section: {
        display: 'flex',
        flex: '1',
      },
    };
  }

  get dropdownStyles() {
    return {
      child: {
        default: {
          flex: '1',
          padding: '12px',
        },
        hover: {
          backgroundColor: StyleConstants.colors.turquoise,
        },
      },
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          display: 'flex',
          flexFlow: 'column',
          zIndex: StyleConstants.planes.two,
          top: '4px',
          left: '48px',
          width: '684px',
        }
      ),
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    this.setState({ query: this.state.input });
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderResults() {
    var results = [
      { content: 'Result 1' },
      { content: 'Result 2' },
    ];
    return (
      <Dropdown
        options={results}
        styles={this.dropdownStyles} />
    );
  }

  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.section}>
          <div style={this.styles.logo}>
            <i className={'fa fa-search fa-1x'} />
          </div>
          <input
            placeholder={'Search for a student, school, or recruiter'}
            style={this.styles.input}>
          </input>
        </div>
        {this.renderResults()}
      </div>
    );
  }
}
