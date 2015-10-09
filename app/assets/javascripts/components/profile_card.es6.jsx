class ProfileCard extends React.Component {

  get styles() {
    return {
      container: {
        display: 'inline-block',
        position: 'relative',
        width: '250px',
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
        <ProfileCardHead />
        <ProfileCardBody />
      </div>
    );
  }
}
