class StudentPage extends Component {

  static get defaultState() {
    return { sidebar: true };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flex: '1',
        paddingLeft: '196px',
      },
      placeholder: {
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
      parent1_name: 'Amy Shen',
      parent1_type: 'guardian',
      parent1_cell_number: '888-888-8888',
      parent1_home_number: '555-555-5555',
      parent1_address: '2617 College Ave Berkeley CA 94704',
      parent2_name: 'David Shen',
      parent2_type: 'guardian',
      parent2_cell_number: '888-888-8888',
      parent2_home_number: '555-555-5555',
      parent2_address: '2617 College Ave Berkeley CA 94704',
    };
  }

  handleClick(event) {
    this.setState({ sidebar: !this.state.sidebar });
  }

  render() {
    return (
      <div style={StyleConstants.pages.default}>
        <Header
          toggleSidebar={this.handleClick.bind(this)} />
        <div style={this.styles.container}>
          <Sidebar shouldShow={this.state.sidebar} />
          <StudentGrid student={this.student} />
          <div style={this.styles.placeholder}></div>
        </div>
      </div>
    );
  }
}

