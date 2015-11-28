class FormBody extends Component {

  // --------------------------------------------------
  // Setup
  // --------------------------------------------------
  constructor(props) {
    super(props);
    this._listener = (state) => this.setState(state);
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
          width: '712px',
          padding: '36px',
          margin: '20px',
        }
      ),
      header: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '24px',
      },
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(FormStore.getState());
  }

  componentDidMount() {
    FormStore.listen(this._listener);
  }

  componentWillUnmount() {
    FormStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  createStudent(event) {
    Requester.post(
      RouteConstants.students.create,
      {
        student: {
          birthday: '12/25/2000',
          cell_phone: '(510) 333-3333',
          email: 'jonie_distefano@gmail.com',
          first_name: 'Jonie',
          home_address: '5150 Kingston Street',
          home_phone: '(510) 333-3333',
          last_name: 'Distefano',
        },
      }
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderSections() {
    return this.state.sections.map((section, index) => this.renderSection(section, index));
  }

  render() {
    return(
      <div style={this.styles.container}>
        <div style={this.styles.header}>
          <h1 style={this.styles.title}>{'Form'}</h1>
        </div>
        {this.renderSections()}
        <FormSection
          title={'Basic Information'}
          updateValue={() => this.updateValue()} />
        <FormSection
          title={'Health Information'}
          updateValue={() => this.updateValue()} />
        <FormFooter />
      </div>
    );
  }
}
