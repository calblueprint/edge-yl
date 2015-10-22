class StudentPage extends Component {

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
    };
  }

  // TODO(Warren): Remove this temporary method after our api is ready.
  get student() {
    return {
      age: 16,
      birthday: '1/1/1999',
      email: 'katelyn_marchan@gmail.com',
      first_name: 'Katelyn',
      last_name: 'Marchan',
      id: 1,
      phone_number: '(408) 436-7654',
      school: 'School One',
      status: 'Pending',
      group_letter: 'Group A',
      team_leader_name: 'Warren Shen',
      junior_crew_name: 'Edge Crew',
      dorm_room_number: 'Cory 301',
      roommate_name: 'Anthony Huang',
    };
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
          <StudentGrid student={this.student} />
          <div style={this.styles.placeholder}></div>
        </div>
      </div>
    );
  }
}

