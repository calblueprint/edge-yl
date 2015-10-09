class ProfileCard extends React.Component {

  static getpropTypes() {
    return {
      cardName: React.PropTypes.string,
      cardBody: React.PropTypes.string,
    }
  }

  static get defaultProps() {
    return {
      cardName: '',
      cardBody: '',
    }
  }

  get styles() {
    return {
      container: {
        display: 'inline-block',
        position: 'relative',
        width: '33%',
        height: '250px',
        backgroundColor: 'white',
        border: '1px solid',
        borderColor: '#e5e6e9 #dfe0e4 #d0d1d5',
        borderRadius: 3,
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <ProfileCardHead cardName={this.props.cardName} />
        <ProfileCardBody cardBody={this.props.cardBody} />
      </div>
    );
  }
}
