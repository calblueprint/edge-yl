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
        StyleConstants.cards.body,
        { alignItems: 'center' }
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
    var school = this.props.school;
    this.setState({
      address_city: school.address_city,
      address: school.address_one,
      address_state: school.address_state,
      address_zip: school.address_zip,
      school_name: school.name,
      website: school.website
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
        address_city: this.state.address_city,
        address_one: this.state.address,
        address_state: this.state.address_state,
        address_zip: this.state.address_zip,
        name: this.state.school_name,
        website: this.state.website,
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
            action={this.generateHandler('school_name')}
            placeholder={'School'}
            value={this.state.school_name} />
          <CardInput
            action={this.generateHandler('address')}
            placeholder={'Address'}
            value={this.state.address} />
          <CardInput
            action={this.generateHandler('address_city')}
            placeholder={'City'}
            value={this.state.address_city} />
          <CardInput
            action={this.generateHandler('address_state')}
            placeholder={'State'}
            value={this.state.address_state} />
          <CardInput
            action={this.generateHandler('address_zip')}
            placeholder={'Zip'}
            value={this.state.address_zip} />
          <CardInput
            action={this.generateHandler('website')}
            placeholder={'website'}
            value={this.state.website} />
        </div>
      </div>
    );
  }
}
