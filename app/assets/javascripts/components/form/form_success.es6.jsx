class FormSuccess extends Component {

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
      wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      container: Object.assign(
        {},
        StyleConstants.containers.card,
        {
          alignItems: 'center',
          width: '500px',
          textAlign: 'center',
          marginTop: '20px',
          padding: '20px',
        },
      ),
      icon: {
        width: '100%',
      },
      text: {
        marginTop: '10px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
  	return (
      <div style={this.styles.wrapper}>
    		<div style={this.styles.container}>
          <i style={this.styles.icon} className="fa fa-check-circle fa-5x"></i>
    			<p style={this.styles.text}>{`You have successfully completed the ${this.props.target}
            form for EDGE 2016. You should be receiving a confirmation email shortly.`} </p>
    		</div>
      </div>
  	);
  }
}
