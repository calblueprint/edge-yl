class StudentPage extends Component {

  static get propTypes() {
    return {
      id: React.PropTypes.number.isRequired,
    };
  }

  static get defaultProps() {
    return {
      id: 1,
    };
  }

  static get defaultState() {
    return {
      sidebar: true,
      student: {
        school: {},
      },
    };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flex: '1',
        paddingTop: '48px',
        paddingLeft: '196px',
        paddingRight: '196px',
      },
      placeholder: {
        width: '196px',
      },
    };
  }

  componentDidMount() {
    resolve = (response) => {
      this.setState({ student: JSON.parse(response) })
    };
    Requester.get(ApiConstants.students.show(this.props.id), resolve);
  }

  toggleSidebar(event) {
    this.setState({ sidebar: !this.state.sidebar });
  }

  render() {
    return (
      <div style={StyleConstants.pages.default}>
        <Header
          toggleSidebar={this.toggleSidebar.bind(this)} />
        <div style={this.styles.container}>
          <Sidebar shouldShow={this.state.sidebar} />
          <StudentGrid student={this.state.student} />
          <StudentComments
            comments={student.student_comments} />
        </div>
      </div>
    );
  }
}

