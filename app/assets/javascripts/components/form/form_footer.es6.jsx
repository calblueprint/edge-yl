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
  // Render
  // --------------------------------------------------
  renderPrevious() {
    var page = this.props.page;
    var uuid = this.props.uuid;
    var action = (page, uuid) => window.location = RouteConstants.forms.student(page, uuid);
    if (page.number > 1) {
      return (
        <FormButton
          action={() => action(page.number - 1, uuid)}
          content={'Previous Page'} />
      );
    }
  }

  renderNext() {
    var page = this.props.page;
    var uuid = this.props.uuid;
    var content = '';
    if (page['is_last']) {
      content = 'Submit';
    } else {
      content = 'Next Page';
    }
    if (this.props.uuid) {
      return (
        <FormButton
          action={() => FormActions.updateSubmission(page, uuid)}
          content={content} />
      );
    } else {
      return (
        <FormButton
          action={() => FormActions.createSubmission(page)}
          content={content} />
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
