class PreviewHeader extends Component {

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
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
      warning: Object.assign(
        {},
        {
          color: '#ff4d4d',
        },
      ),
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.container}>
        <h1>{'Submission Preview'}</h1>
        <h5 style={this.styles.warning}>{'IMPORTANT: Your submission is not complete.'}</h5>
        <h5 style={this.styles.warning}>{'Please review your responses and click SUBMIT.'}</h5>
      </div>
    );
  }
}
