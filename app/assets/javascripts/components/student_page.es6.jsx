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
    return [
      {
        age: 16,
        birthday: '1/1/1999',
        email: 'katelyn_marchan@gmail.com',
        first_name: 'Katelyn',
        last_name: 'Marchan',
        id: 1,
        phone_number: '(408) 436-7654',
        school: 'School One',
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
          <StudentGrid />
          <div style={this.styles.placeholder}></div>
        </div>
      </div>
    );
  }
}

