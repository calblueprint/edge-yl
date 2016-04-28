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
      			<h3>{`You have successfully completed the ${this.props.target} form for EDGE!`}</h3>
            <br />
            <p>{`
              You should be receiving a confirmation email to the email address provided
              shortly. Your student will also be receiving instructions on how to confirm/finish
              their registration via that email. We may ask for your assistance in helping the student
              confirm their registration.
              `}
            </p>
            <br />
            <p>{`
              Questions? Please contact us at registration@edgeyl.org. You may also leave us
              a message at (510) 408-6606, but please note that we generally response much faster
              to emails`}
            </p>
            <br />
            <br />
            <a href='http://www.edgeyl.org/'><h4>Go back to the EDGE website</h4></a>
          </div>
    		</div>
      </div>
  	);
  }
}
