class StudentOutreachEdit extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      template: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.body,
        { alignItems: 'center' }
      ),
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState({
      first_name: this.props.student.responsibility.user.first_name,
      last_name: this.props.student.responsibility.user.last_name,
    });
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateHandler(field) {
    var state = {};
    return(event) => {
      state[field] = event.target.value;
      this.setState(state);
    };
  }

  updateStudent() {
    var params = {
      student: {
        responsibility: {
          user_id: 2,
        },
      },
    };
    StudentActions.updateStudent(this.props.student.id, params);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderForm() {
    var responsibility = this.props.student.responsibility;
    if (responsibility) {
      return (
        <div style={this.styles.form}>
          <CardInput
            action={this.generateHandler('user')}
            placeholder={'Volunteer'}
            value={`${this.state.first_name} ${this.state.last_name}`}
          />
        </div>
      );
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        <CardHeader
          action={() => this.updateStudent()}
          content={'Student Outreach'}
          icon={TypeConstants.icons.save} />
        {this.renderForm()}
      </div>
    );
  }
}
