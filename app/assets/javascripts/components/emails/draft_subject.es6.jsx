class DraftSubject extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      draft: React.PropTypes.object.isRequired,
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
    node.oninput = (event) => {
      DraftActions.storeAttribute(
        'subject',
        event.target.value,
        this.props.draft.id,
      );
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var draft = this.props.draft;
    return (
      <div style={this.styles.container}>
        <div style={this.styles.section}>
          <h6>Subject</h6>
          <p>{`Draft last updated at: ${draft.updated_at}`}</p>
        </div>
        <input
          defaultValue={this.props.draft.subject}
          placeholder={'Subject'}
          ref={'input'}
          type={'text'} />
      </div>
    );
  }
}
