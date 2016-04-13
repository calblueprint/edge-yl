class DraftSubject extends Component {

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
      container: {
        display: 'flex',
        flexFlow: 'column',
        alignSelf: 'stretch',
      },
      section: {
        display: 'flex',
        justifyContent: 'space-between',
      },
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentDidMount() {
    var node = ReactDOM.findDOMNode(this.refs.input);
    node.onblur = (event) => {
      DraftActions.updateDraft(
        this.props.draft.id,
        { email: { subject: event.target.value  } },
      );
    };
    node.oninput = (event) => {
      DraftActions.storeAttribute(
        'subject',
        event.target.value,
        this.props.draft.id,
      );
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateSaveStatus() {
    if (this.props.template.saving) {
      return 'Saving...';
    } else if (this.props.template.attributes){
      var attributes = this.props.template.attributes;
      return 'Draft last updated at: ' + attributes.updated_at;
    }
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var template = this.props.template;
    var attributes = template.attributes ? template.attributes : {};
    return (
      <div style={this.styles.container}>
        <div style={this.styles.section}>
          <h6>{'Subject'}</h6>
          <p>{this.generateSaveStatus()}</p>
        </div>
        <input
          autoFocus={!attributes.subject}
          placeholder={'Subject'}
          ref={'input'}
          type={'text'}
          value={attributes.subject} />
      </div>
    );
  }
}
