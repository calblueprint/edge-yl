class FormFooter extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      errors: React.PropTypes.bool.isRequired,
      id: React.PropTypes.string,
      page: React.PropTypes.object.isRequired,
      target: React.PropTypes.string.isRequired,
    };
  }

  static get defaultProps() {
    return {
      id: null,
    };
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
          justifyContent: 'center',
          padding: '36px',
          margin: '12px 0px',
        },
      ),
      left: {
        display: 'flex',
        flex: '1',
        justifyContent: 'flex-start',
      },
      middle: {
        display: 'flex',
        flex: '1',
        justifyContent: 'center',
        alignItems: 'center',
      },
      right: {
        display: 'flex',
        flex: '1',
        justifyContent: 'flex-end',
      },
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  createSubmission() {
    FormActions.createSubmission(
      this.props.page,
      this.props.target,
    );
  }

  updateSubmission(forward) {
    FormActions.updateSubmission(
      this.props.page,
      this.props.target,
      this.props.id,
      forward,
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderErrors() {
    if (this.props.errors) {
      return (
        <h6 style={StyleConstants.forms.questions.errors}>
          {'Please correct the errors above.'}
        </h6>
      );
    }
  }

  renderPrevious() {
    var page = this.props.page;
    if (page.number > 1) {
      return (
        <FormButton
          action={() => this.updateSubmission(false)}
          content={'Previous'} />
      );
    }
  }

  renderNext() {
    return (
      <FormButton
        action={() => this.updateSubmission(true)}
        content={'Next'} />
    );
  }

  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.left}>
          {this.renderPrevious()}
        </div>
        <div style={this.styles.middle}>
          {this.renderErrors()}
        </div>
        <div style={this.styles.right}>
          {this.renderNext()}
        </div>
      </div>
    );
  }
}
