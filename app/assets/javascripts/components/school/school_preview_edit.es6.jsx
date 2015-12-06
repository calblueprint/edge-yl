class SchoolPreviewEdit extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      school: React.PropTypes.object.isRequired,
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
      address: this.props.school.address,
      counselor_name: this.props.school.counselor_name,
      counselor_email: this.props.school.counselor_email,
      school_name: this.props.school.name,
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

  updateSchool() {
    var params = {
      school: {
        address: this.state.address,
        counselor_name: this.state.counselor_name,
        counselor_email: this.state.counselor_email,
        school_name: this.state.school_name,
      },
    };
    SchoolActions.updateSchool(this.props.school.id, params);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var school = this.props.school;
    return (
      <div style={this.styles.container}>
        <CardHeader
          action={() => this.updateSchool()}
          content={'School Preview'}
          icon={TypeConstants.icons.save} />
        <div style={this.styles.form}>
          <img
            src='http://www.wlac.edu/WLAC/media/images/highschool/highschool-index.jpg'
            style={this.styles.image} />
          <CardInput
            action={this.generateHandler('school')}
            placeholder={'School'}
            value={this.state.school_name} />
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
