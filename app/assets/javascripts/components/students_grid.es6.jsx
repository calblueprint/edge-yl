class StudentsGrid extends Component {

  get styles() {
    return {
      container: {
        display: 'flex',
        position: 'relative',
        marginTop: '2%',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <StudentsCard
          firstName={'Anthony'}
          lastName={'Huang'}
          birthday={'May 6, 1995'}
          age={'20'}
          phoneNumber={'888-888-8888'} 
          email={'anthonyhuang@edgeyl.org'}
          school={'UC Berkeley'}
          status={'Volunteer, Recruitment Group'} />
      </div>
    );
  }
}
