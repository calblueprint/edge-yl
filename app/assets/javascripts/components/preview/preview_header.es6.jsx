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
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.container}>
        <h1>{'Submission Preview'}</h1>
        <h5>{'DESCRIPTION'}</h5>
      </div>
    );
  }
}
