class ProfileGrid extends React.Component {
  
  get styles() {
    return {
      container: {
        position: 'relative',
        width: 356,
        padding: 24,
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
        Profile Grid
        <ProfileCard />
        <ProfileCard />
      </div>
    );
  }
}

