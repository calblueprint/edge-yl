class ProfileCard extends Component {

  get styles() {
    return {
      container: {
        display: 'flex', 
        flexDirection: 'column',
        flex: 1,
        position: 'relative',
        padding: '0 12px',
        height: '600px',
        backgroundColor: 'white',
        border: '1px solid',
        borderColor: '#e5e6e9 #dfe0e4 #d0d1d5',
        borderRadius: '3px',
      },
    };
  }

  render() {
    return (
      <div style = {this.styles.container}> 
        <ProfilePreview />
        <ProfileOptions />
      </div>
    );
  }
}
