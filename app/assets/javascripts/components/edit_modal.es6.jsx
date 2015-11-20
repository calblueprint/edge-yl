class EditModal extends Component {

  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
      type: React.PropTypes.oneOf([
        'contact',
        'conference',
        'parent',
        'preview',
        'create_comment',
      ]).isRequired,
    };
  }

  static get defaultProps() {
    return {
      student: {},
      type: 'preview',
    };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        marginBottom: '6px',
      },
    };
  }

  componentWillMount() {
    this.setState(StudentStore.getState());
  }

  componentDidMount() {
    this._listener = StudentStore.listen((state) => this.setState(state));
  }

  componentWillUnmount() {
    StudentStore.unlisten(this._listener);
  }

  renderBody() {
    switch (this.state.overlay.type) {
      case 'preview':
        return <EditPreview {...this.props} />;
      case 'contact':
        return <EditContact {...this.props} />
      case 'create_comment':
        return <CreateComment {...this.props} />;
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <h2 style={this.styles.title}>{'Edit'}</h2>
        {this.renderBody()}
      </div>
    );
  }
}
