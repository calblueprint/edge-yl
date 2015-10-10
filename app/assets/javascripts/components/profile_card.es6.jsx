class ProfileCard extends React.Component {

  static get propTypes() {
    return {
      cardName: React.PropTypes.string.isRequired,
      cardBody: React.PropTypes.string.isRequired,
    };
  }

  static get defaultProps() {
    return {
      cardName: '',
      cardBody: '',
    };
  }

  get styles() {
    return {
      container: {
        display: 'inline-block',
        position: 'relative',
        width: '33%',
        height: 250,
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
