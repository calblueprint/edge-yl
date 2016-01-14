class FeedbackPage extends Component {

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
      profile: React.PropTypes.object.isRequired,
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
        alignItems: 'center',
        paddingTop: StyleConstants.heights.header,
      },
      footer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        alignSelf: 'stretch',
        margin: '12px 0px',
      },
      label: {
        paddingRight: '4px',
      },
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(FeedbackStore.getState());
  }

  componentDidMount() {
    FeedbackStore.listen(this._listener);
  }

  componentWillUnmount() {
    FeedbackStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------

  render() {
    return (
      <div style={StyleConstants.pages.wrapper}>
        <Header active={false} />
        <div style={this.styles.container}>
          <FeedbackCard
            profile={this.props.profile}
            template={this.state.template} />
        </div>
      </div>
    );
  }
}
