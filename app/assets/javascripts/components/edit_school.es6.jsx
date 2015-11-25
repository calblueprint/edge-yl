class EditSchool extends Component {

  static get propTypes() {
    return {
      school: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      school: {},
    };
  }

  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          display: 'flex',
          flexFlow: 'column',
          justifyContent: 'center',
          width: '356px',
        }
      ),
      form: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '12px',
        marginBottom: '18px',
      },
      image: {
        width: '152px',
        height: '152px',
        marginTop: '18px',
        borderRadius: '50%',
      },
    };
  }

  componentWillMount() {
    this.setState({
      address: this.props.school.address,
      counselor_name: this.props.school.counselor_name,
      counselor_email: this.props.school.counselor_email,
    });
  }

  updateSchool() {
    var params = {
      address: this.state.address,
      counselor_name: this.state.counselor_name,
      counselor_email: this.state.counselor_email
    };
    SchoolActions.updateSchool(this.props.school.id, params);
  }

  generateHandler(field) {
    var state = {};
    return(event) => {
      state[field] = event.target.value;
      this.setState(state);
    };
  }

  render() {
    var school = this.props.school;
    return (
      <div style={this.styles.container}>
        <CardHeader
          action={(event) => this.updateSchool()}
          content={'School Preview'}
          icon={'fa fa-save fa-lg'} />
        <div style={this.styles.form}>
          <img
            src='https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xfp1/t31.0-8/11856297_10200932572512494_2256826043885795533_o.jpg'
            style={this.styles.image} />
          <CardInput
            action={this.generateHandler('address')}
            placeholder={'Address'}
            value={this.state.address} />
          <CardInput
            action={this.generateHandler('counselorName')}
            placeholder={'Counselor Name'}
            value={this.state.counselor_name} />
          <CardInput
            action={this.generateHandler('counselorEmail')}
            placeholder={'Counselor Email'}
            value={this.state.counselor_email} />
        </div>
      </div>
    );
  }
}
