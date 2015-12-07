class StudentPreview extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.body,
        { alignItems: 'center' }
      ),
      image: {
        width: '128px',
        height: '128px',
        marginBottom: '12px',
        borderRadius: '50%',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var student = this.props.student;
    return (
      <div style={this.styles.container}>
        {console.log(student)}
        <img
          src={'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xfp1/t31.0-8/11856297_10200932572512494_2256826043885795533_o.jpg'}
          style={this.styles.image} />
        <h5>{`${student.first_name} ${student.last_name}`}</h5>
        <h5>{`${student.email}`}</h5>
        <h5>{`Gender: ${student.gender}`}</h5>
        <h5>{`${student.birthday}`}</h5>
        <h5>{`T-shirt Size: ${student.shirt_size}`}</h5>
      </div>
    );
  }
}
