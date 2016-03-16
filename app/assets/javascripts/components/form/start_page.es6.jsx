class StartPage extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      id: React.PropTypes.string.isRequired,
      target: React.PropTypes.string.isRequired,
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
        width: '712px',
      },
      header: Object.assign(
        {},
        StyleConstants.templates.card,
        {
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          padding: '36px',
          marginTop: '24px',
        },
      ),
      wrapper: Object.assign(
        {},
        StyleConstants.pages.wrapper,
        {
          alignItems: 'center',
          flexDirection: 'column',
        },
      ),
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.wrapper}>
        <div style={this.styles.container}>
          <div style={this.styles.header}>
            <h1>{'EDGE Registration - School'}</h1>
          </div>
        </div>
      </div>
    );
  }
}
