class ProfileGrid extends React.Component {
  
  get styles() {
    return {
      container: {
        position: 'relative',
        width: '70%',
        height: '100vh',
        padding: 10,
        float: 'right',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}> 
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    );
  }
}
