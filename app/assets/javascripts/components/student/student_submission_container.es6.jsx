class StudentSubmissionContainer extends Component {

  // --------------------------------------------------
  // Setup
  // --------------------------------------------------
  constructor(props) {
    super(props);
    this._listener = (state) => this.setState(state);
  }

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(StudentSubmissionStore.getState());
  }

  componentDidMount() {
    StudentSubmissionStore.listen(this._listener);
    StudentSubmissionActions.fetchForm(this.props.student.submission_id);
  }

  componentWillUnmount() {
    StudentSubmissionStore.unlisten(this._listener);
  }
  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.templates.card,
        {
          display: 'flex',
          flexFlow: 'column',
          padding: '36px',
          marginTop: '12px',
        },
      ),
      header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '12px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderPage(page) {
    return (
      <StudentSubmissionPage
        key={page.id}
        page={page} />
    );
  }

  renderPages() {
    var pages = this.state.form.pages;
    if (pages) {
      return this.state.form.pages.map((page) => this.renderPage(page));
    }
  }

  render() {
    return (
      <div style={StyleConstants.wrappers.center}>
        <div style={StyleConstants.pages.center}>
          {this.renderPages()}
        </div>
      </div>
    );
  }
}
