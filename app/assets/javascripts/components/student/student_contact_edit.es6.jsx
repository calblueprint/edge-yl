class StudentContactEdit extends Component {

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

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState({
      cellPhone: this.props.student.cell_phone,
      email: this.props.student.email,
      homeAddress: this.props.student.home_address,
      homePhone: this.props.student.home_phone,
    });
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateHandler(field) {
    var state = {};
    return(event) => {
      state[field] = event.target.value;
      this.setState(state);
    };
  }

  updateStudent() {
    var params = {
      student: {
        cell_phone: this.state.cellPhone,
        email: this.state.email,
        home_address: this.state.homeAddress,
        home_phone: this.state.homePhone,
      },
    };
    StudentActions.updateStudent(this.props.student.id, params);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var student = this.props.student;
    return (
      <div style={this.styles.container}>
        <CardHeader
          action={() => this.updateStudent()}
          content={'Student Information'}
          icon={TypeConstants.icons.save} />
        <div style={this.styles.form}>
          <CardInput
            action={this.generateHandler('cellPhone')}
            placeholder={'Cell phone'}
            value={this.state.cellPhone} />
          <CardInput
            action={this.generateHandler('homePhone')}
            placeholder={'Home phone'}
            value={this.state.homePhone} />
          <CardInput
            action={this.generateHandler('email')}
            placeholder={'Email'}
            value={this.state.email} />
          <CardInput
            action={this.generateHandler('homeAddress')}
            placeholder={'Home address'}
            value={this.state.homeAddress} />
        </div>
      </div>
    );
  }
}
