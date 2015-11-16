class StudentsCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      student: {},
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
          alignItems: 'center',
          width: '49%',
          height: '24%',
          padding: '24px',
          marginTop: '12px',
          boxSizing: 'border-box',
        }
      ),
      image: {
        width: '122px',
        height: '122px',
        borderRadius: '50%',
      },
      info: {
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
            src='https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xfp1/t31.0-8/11856297_10200932572512494_2256826043885795533_o.jpg'
            style={this.styles.image} />
        </Clickable>
        <div style={this.styles.info}>
          <Clickable
            content={`${student.first_name} ${student.last_name}`}
            route={RouteConstants.students.show(student.id)}
            styles={this.clickableStyles}
            type={'h3'} />
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

