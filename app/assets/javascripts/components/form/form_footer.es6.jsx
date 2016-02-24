class FormFooter extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      page: React.PropTypes.object.isRequired,
      target: React.PropTypes.string.isRequired,
      uuid: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      uuid: null,
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
          margin: '12px 0px 48px',
        },
      ),
      leftButton: {
        display: 'flex',
        flex: '1',
        justifyContent: 'flex-start',
      },
      rightButton: {
        display: 'flex',
        flex: '1',
        justifyContent: 'flex-end',
      },
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  updateSubmission(forward) {
    var uuid = this.props.uuid;
    FormActions.updateSubmission(
      this.props.page,
      this.props.target,
      this.props.uuid,
      forward,
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
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
    var page = this.props.page;
    if (page.is_last) {
      return (
        <FormButton
          action={() => this.updateSubmission(true)}
          content={'Submit'} />
      );
    } else {
      return (
        <FormButton
          action={() => FormActions.createSubmission(page)}
          content={'Next'} />
      );
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.leftButton}>
          {this.renderPrevious()}
        </div>
        <div style={this.styles.rightButton}>
          {this.renderNext()}
        </div>
      </div>
    );
  }
}
