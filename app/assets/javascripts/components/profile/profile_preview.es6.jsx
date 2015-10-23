class ProfilePreview extends Component {

  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          padding: '24px 0px',
          marginTop: '2%',
        }
      ),

      image: {
        position: 'relative',
        width: '312px',
        borderRadius: '50%',
      },
      name: {
        position: 'relative',
        paddingTop: '24px',
        fontSize: '32px',
      }, 
      position: {
        position: 'relative',
        fontSize: '16px',
        paddingTop: '12px',
        fontStyle: 'italic',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <img 
          src='https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xfp1/t31.0-8/11856297_10200932572512494_2256826043885795533_o.jpg' 
          style={this.styles.image} /> 
        <span style={this.styles.name}>
          {'Anthony Huang'}
        </span>
        <span style={this.styles.position}>
          {'Volunteer, Recruitment Group'}
        </span>
      </div>
    );
  }
}

