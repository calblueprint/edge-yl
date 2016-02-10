class FormPage extends Component {

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
      target: React.PropTypes.string.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.pages.wrapper,
        { justifyContent: 'center' },
      ),
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(FormStore.getState());
  }

  componentDidMount() {
    FormStore.listen(this._listener);
    FormActions.fetchForm(this.props.target);
  }

  componentWillUnmount() {
    FormStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.container}>
        <FormBody form={this.state.form} />
      </div>
    );
  }
}

