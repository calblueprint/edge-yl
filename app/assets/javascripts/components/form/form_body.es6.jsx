class FormBody extends Component {

  static get defaultState() { 
    return {
      [section_one: [
      firstName: '',
      lastName: '',
    };
  }

  static get propTypes() {
    return {};
  }

  static get defaultProps() {
    return {};
  }

  //TODO(Sonia): Finish this method definition
  updateValue(section, key, value) {
  }

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

  handleClick(event) {
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

  render() {
    return(
      <div style={this.styles.container}>
        <div style={this.styles.header}>
          <h1 style={this.styles.title}>{'Form'}</h1>
        </div>
        <FormSection
          title={'Basic Information'} 
          updateValue={this.updateValue.bind(this)} />
        <FormSection
          title={'Health Information'} 
          updateValue={this.updateValue.bind(this)} />
        <Clickable
          content={'Create Student'}
          func={this.handleClick.bind(this)} />
      </div>
    );
  }
}
