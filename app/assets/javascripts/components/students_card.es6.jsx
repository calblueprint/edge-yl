class StudentsCard extends Component {

  static get propTypes() {
    return {
      student: React.PropTypes.array.isRequired,
    };
  }

  static get defaultProps() {
    return {
      student: []
    };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        width: '49%',
        backgroundColor: 'white',
        border: '1px solid',
        borderColor: '#e5e6e9 #dfe0e4 #d0d1d5',
        borderRadius: '3px',
        marginTop: '2%',
        padding: '24px',
        boxSizing: 'border-box',
      },
      image: {
        position: 'relative',
        width: '122px',
        height: '122px',
        borderRadius: '50%',
      },
      info: {
        paddingLeft: '24px',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <img 
          src='https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xfp1/t31.0-8/11856297_10200932572512494_2256826043885795533_o.jpg' 
          style={this.styles.image} /> 
        <div style={this.styles.info}>
          {this.props.student.first_name}
          {this.props.student.last_name}<br />
          {this.props.student.birthday}, {this.props.student.age}<br />
          {this.props.student.school}<br />
          {this.props.student.status}<br />
        </div>
      </div>
    );
  }
}

