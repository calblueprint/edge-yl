class StudentGuardianEdit extends Component {

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
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState({
      guardianOneName: this.props.student.guardian_one_name,
      guardianOnePhone: this.props.student.guardian_one_phone,
      guardianOneEmail: this.props.student.guardian_one_email,
      guardianTwoName: this.props.student.guardian_two_name,
      guardianTwoPhone: this.props.student.guardian_two_phone,
      guardianTwoEmail: this.props.student.guardian_two_email,
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
      guardian_one_name: this.state.guardianOneName,
      guardian_one_phone: this.state.guardianOnePhone,
      guardian_one_email: this.state.guardianOneEmail,
      guardian_two_name: this.state.guardianTwoName,
      guardian_two_phone: this.state.guardianTwoPhone,
      guardian_two_email: this.state.guardianTwoEmail,
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
          content={'Guardian Information'}
          icon={TypeConstants.icons.save} />
        <div style={this.styles.form}>
          <CardInput
            action={this.generateHandler('guardianOneName')}
            placeholder={'Guardian One Name'}
            value={this.state.guardianOneName} />
          <CardInput
            action={this.generateHandler('guardianOnePhone')}
            placeholder={'Guardian One Phone'}
            value={this.state.guardianOnePhone} />
          <CardInput
            action={this.generateHandler('guardianOneEmail')}
            placeholder={'Guardian One Email'}
            value={this.state.guardianOneEmail} />
          <CardInput
            action={this.generateHandler('guardianTwoName')}
            placeholder={'Guardian Two Name'}
            value={this.state.guardianTwoName} />
          <CardInput
            action={this.generateHandler('guardianTwoPhone')}
            placeholder={'Guardian Two Phone'}
            value={this.state.guardianTwoPhone} />
          <CardInput
            action={this.generateHandler('guardianTwoEmail')}
            placeholder={'Guardian Two Email'}
            value={this.state.guardianTwoEmail} />
        </div>
      </div>
    );
  }
}
