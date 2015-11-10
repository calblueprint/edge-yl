class EditPreview extends Component {

  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      student: {},
    };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: '1',
        padding: '12px',
      },
      image: {
        width: '152px',
        height: '152px',
        marginBottom: '12px',
        borderRadius: '50%',
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
        <FormField title={'First Name'}
          placeholder={`${student.first_name}`} />
        <FormField title={'Last Name'}
          placeholder={`${student.last_name}`}/>
        <FormField title={'Birthday'}
          placeholder={`${student.birthday}`} />
        <FormField title={'Age'}
          placeholder={`${student.age}`} />
        <FormButton content={'Cancel'} />
        <FormButton content={'Save'} />
      </div>
    );
  }
}
