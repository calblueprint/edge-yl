class AccountMetadata extends Component {


  get styles() {
    return {
      container: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        alignItems: 'center',
        width: '100%',
        borderBottom: 'solid #D6D6D6 3px',
      },

      image: {
        borderRadius: '50%',
        overflow: 'hidden',
        width: '250px',
        height: 'auto',
        paddingTop: '30px',
      },

      name: {
        paddingTop: '20px',
        paddingBottom:'15px',
        fontSize: '32px',
      }, 
      position: {
        fontSize: '18px',
        paddingBottom: '20px',

      },
      // body: {
      //   flex: 1,
      //   position: 'relative',
      //   width: '100%',
      // },
    };
    
  }

  render() {
    return (
      <div style={this.styles.container}>
        <img src = 'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xfp1/t31.0-8/11856297_10200932572512494_2256826043885795533_o.jpg' 
             style = {this.styles.image} /> 

        <span style = {this.styles.name} >Anthony Huang</span>
        <span style = {this.styles.position}>Volunteer, Recruitment Group</span>
      </div>
    );
  }
}

