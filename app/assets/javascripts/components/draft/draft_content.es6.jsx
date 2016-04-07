class DraftContent extends Component {

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
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentDidMount() {
    var node = ReactDOM.findDOMNode(this.refs.input);
    node.oninput = (event) => {
      DraftActions.storeAttribute(
        'content',
        event.target.value,
        this.props.draft.id,
      );
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var template = this.props.template;
    var attributes = template.attributes ? template.attributes : {};
    return (
      <div style={this.styles.container}>
        <h6>{'Content'}</h6>
        <textarea
          ref={'input'}
          rows={'10'}
          value={attributes.content} />
      </div>
    );
  }
}
