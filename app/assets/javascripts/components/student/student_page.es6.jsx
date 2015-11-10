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
      overlay: false,
      type: '',
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
    };
  }

  componentDidMount() {
    resolve = (response) => { this.setState({ student: response }) };
    Requester.get(ApiConstants.students.show(this.props.id), resolve);
  }

  toggleSidebar(event) {
    this.setState({ sidebar: !this.state.sidebar });
  }

  renderOverlay(card_type) {
    this.setState({ overlay: true,
                    type: card_type });
  }

  closeOverlay(event) {
    this.setState({ overlay: false });
  }

  render() {
    return (
      <div style={StyleConstants.pages.default}>
        <PageOverlay
          shouldShow={this.state.overlay}
          closeOverlay={this.closeOverlay.bind(this)}
          student={this.state.student}
          type={this.state.type} />
        <Header
          toggleSidebar={this.toggleSidebar.bind(this)} />
        <div style={this.styles.container}>
          <Sidebar shouldShow={this.state.sidebar} />
          <StudentGrid student={this.state.student}
            renderOverlay={this.renderOverlay.bind(this)} />
          <StudentComments
            comments={this.state.student.student_comments} />
        </div>
      </div>
    );
  }
}

