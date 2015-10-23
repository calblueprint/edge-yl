class ProfileCards extends Component {

  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
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
