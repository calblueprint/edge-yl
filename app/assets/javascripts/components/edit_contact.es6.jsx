class EditContact extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
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
      schoolAddress: this.props.student.school.school_address,
      schoolName: this.props.student.school.school_name,
    });
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  updateStudent() {
    var params = {
      cell_phone: this.state.cellPhone,
      email: this.state.email,
      home_address: this.state.homeAddress,
      home_phone: this.state.homePhone,
      school_address: this.state.schoolAddress,
      school_name: this.state.schoolName,
    };
    StudentActions.updateStudent(this.props.student.id, params);
  }

  generateHandler(field) {
    var state = {};
    return(event) => {
      state[field] = event.target.value;
      this.setState(state);
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var student = this.props.student;
    return (
      <div style={this.styles.container}>
        <CardHeader
          action={(event) => this.updateStudent()}
          content={'Student Information'}
          icon={'fa fa-save fa-lg'} />
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
          <CardInput
            action={this.generateHandler('schoolName')}
            placeholder={'School name'}
            value={this.state.schoolName} />
          <CardInput
            action={this.generateHandler('schoolAddress')}
            placeholder={'School Address'}
            value={this.state.schoolAddress} />
        </div>
      </div>
    );
  }
}
