class FormFooter extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      page: React.PropTypes.object.isRequired,
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
      container: {
        display: 'flex',
        justifyContent: 'center',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderButton() {
    var page = this.props.page;
    var uuid = this.props.uuid;
    if (this.props.uuid) {
      return (
        <FormButton
          action={() => FormActions.updateSubmission(page, uuid)}
          content={'Update'} />
      );
    } else {
      return (
        <FormButton
          action={() => FormActions.createSubmission(page)}
          content={'Create'} />
      );
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        {this.renderButton()}
      </div>
    );
  }
}
