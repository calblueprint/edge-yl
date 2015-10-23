class ProfileCards extends Component {

  get styles() {
    return {
      container: {
        display: 'flex', 
        flexDirection: 'column',
        flex: '1',
        position: 'relative',
        padding: '0px 12px',
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
