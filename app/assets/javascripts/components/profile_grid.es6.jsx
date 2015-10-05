class ProfileGrid extends React.Component {
  
  get styles() {
    return {
      container: {
        position: 'relative',
        width: 712,
        height: '100%',
        margin: 'auto',
        padding: 5,
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    );
  }
}

