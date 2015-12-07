class StudentsCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.grid,
        {
          flexFlow: 'row',
          justifyContent: 'flex-start',
        }
      ),
      image: {
        width: '128px',
        height: '128px',
        borderRadius: '50%',
      },
      section: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        flex: '1',
        paddingLeft: '24px',
      },
    };
  }

  get clickableStyles() {
    return {
      hover: {
        textDecoration: 'underline',
        opacity: '0.875',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var student = this.props.student;
    return (
      <div style={this.styles.container}>
        <Clickable
          styles={this.clickableStyles}
          route={RouteConstants.students.show(student.id)}
          type={'img'}>
          <img
            src={'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xfp1/t31.0-8/11856297_10200932572512494_2256826043885795533_o.jpg'}
            style={this.styles.image} />
        </Clickable>
        <div style={this.styles.section}>
          <Clickable
            content={`${student.first_name} ${student.last_name}`}
            route={RouteConstants.students.show(student.id)}
            styles={this.clickableStyles}
            type={'h3'} />
          <h6>{`Status: ${student.registration_status}`}</h6>
          <h6>{`${student.birthday}`}</h6>
          <h6>{`${student.email}`}</h6>
          <h6>{`${student.home_address}`}</h6>
          <Clickable
            content={student.school.name}
            route={RouteConstants.schools.show(student.school.id)}
            styles={this.clickableStyles}
            type={'h5'} />
        </div>
      </div>
    );
  }
}

