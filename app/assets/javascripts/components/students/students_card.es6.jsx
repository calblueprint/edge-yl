class StudentsCard extends Component {

  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      student: null,
    };
  }

  get styles() {
    return {
      container: Object.assign(
        {},
        {
          display: 'flex',
          alignItems: 'center',
          width: '49%',
          height: '24%',
          padding: '24px',
          marginTop: '2%',
          boxSizing: 'border-box',
        },
        StyleConstants.cards.default
      ),
      image: {
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
    var student = this.props.student;
    return (
      <div style={this.styles.container}>
        <img
          src='https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xfp1/t31.0-8/11856297_10200932572512494_2256826043885795533_o.jpg'
          style={this.styles.image} />
        <div style={this.styles.info}>
          <h3>{`${student.first_name} ${student.last_name}`}</h3>
          <span>{`${student.email}`}</span>
          <span>{`${student.home_address}`}</span>
        </div>
      </div>
    );
  }
}

