class StudentsPage extends Component {

  static get defaultState() {
    return { sidebar: true };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        height: '100vh',
      },
      body: {
        display: 'flex',
        flex: '1',
        position: 'relative',
        paddingLeft: '196px',
      },
      placeholder: {
        position: 'relative',
        width: '196px',
      },
      // TODO(Warren): Refactor this style out - might happen
      // when abstracting general Page component out of pages.
      subbody: {
        flex: '1',
        position: 'relative',
        padding: '0px 12px',
      },
    };
  }

  // TODO(Warren): Remove this temporary method after our api is ready.
  get students() {
    return [
      {
        age: 16,
        birthday: '1/1/1999',
        email: 'katelyn_marchan@gmail.com',
        first_name: 'Katelyn',
        last_name: 'Marchan',
        phone_number: '(408) 436-7654',
        school: 'School One',
        status: 'Pending',
      },
      {
        age: 15,
        birthday: '12/25/2000',
        email: 'jonie_distefano@gmail.com',
        first_name: 'Jonie',
        last_name: 'Distefano',
        phone_number: '(510) 333-3333',
        school: 'School Two',
        status: 'Attending',
      },
      {
        age: 16,
        birthday: '11/11/1999',
        email: 'melva_currence@gmail.com',
        first_name: 'Melva',
        last_name: 'Currence',
        phone_number: '(888) 555-5555',
        school: 'School Three',
        status: 'Pending',
      },
    ];
  }

  handleClick(event) {
    this.setState({ sidebar: !this.state.sidebar });
  }

  render() {
    return (
      <div style={this.styles.container}>
        <Header
          handleClick={this.handleClick.bind(this)} />
        <div style={this.styles.body}>
          <Sidebar shouldShow={this.state.sidebar} />
          <div style={this.styles.subbody}>
            <StudentsFilters />
            <StudentsGrid />
          </div>
          <div style={this.styles.placeholder}></div>
        </div>
      </div>
    );
  }
}
