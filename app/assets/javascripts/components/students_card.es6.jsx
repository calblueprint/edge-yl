class StudentsCard extends React.Component {

  static get propTypes() {
    return {
      firstName: React.PropTypes.string.isRequired,
      lastName: React.PropTypes.string.isRequired,
      birthday: React.PropTypes.string.isRequired,
      age: React.PropTypes.string.isRequired,
      phoneNumber: React.PropTypes.string.isRequired,
      email: React.PropTypes.string.isRequired,
      school: React.PropTypes.string.isRequired,
      status: React.PropTypes.string.isRequired,
    };
  }

  static get defaultProps() {
    return {
      firstName: '',
      lastName: '',
      birthday: '',
      age: '',
      phoneNumber: '',
      email: '',
      school: '',
      status: '',
    };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        width: '50%',
        height: '400px',
        backgroundColor: 'white',
        border: '1px solid',
        borderColor: '#e5e6e9 #dfe0e4 #d0d1d5',
        borderRadius: '3px',
      },
    image: {
        position: 'relative',
        width: '20px',
        borderRadius: '50%',
      },

      info: {

      },
    };
  }

  render () {
    return (
      <div style={this.styles.container}>
        <img 
          src='https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xfp1/t31.0-8/11856297_10200932572512494_2256826043885795533_o.jpg' 
          style={this.styles.image} /> 
        <div style={this.styles.info}>
          {this.props.firstName}
          {this.props.lastName}
          {this.props.birthday}
          {this.props.age}
          {this.props.phoneNumber}
          {this.props.email}
          {this.props.school}
          {this.props.status}
        </div>
      </div>
    )
  }
}

