class ClosedPage extends Component {

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.containers.card,
        {
          alignItems: 'center',
          padding: '24px',
          marginTop: '24px',
          textAlign: 'center',
        },
      ),
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
  	return (
      <div style={StyleConstants.wrappers.center}>
    		<div style={StyleConstants.pages.center}>
          <div style={this.styles.container}>
      			<p>{`
              The form application period is currently closed.
              Please email _______ for more information
              or check back again in ______.
            `}</p>
          </div>
    		</div>
      </div>
  	);
  }
}
