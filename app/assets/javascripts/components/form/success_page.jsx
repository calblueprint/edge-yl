class SuccessPage extends Component {

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
      icon: {
        width: '100%',
        paddingBottom: '20px',
      },
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
            <i style={this.styles.icon} className="fa fa-check-circle fa-5x"></i>
      			<p>{`You have successfully completed the ${this.props.target} form for EDGE.`}</p>
            <p>{'You should be receiving a confirmation email shortly.'}</p>
          </div>
    		</div>
      </div>
  	);
  }
}
