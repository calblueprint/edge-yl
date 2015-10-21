class StudentCard extends Component {

  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
      // TODO(Warren): change this proptype to an enum.
      type: React.PropTypes.string.isRequired,
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
        flexDirection: 'column',
        position: 'relative',
        width: '32.5%',
        height: '312px',
        marginTop: '1%',
        backgroundColor: 'white',
        border: '1px solid',
        borderColor: '#e5e6e9 #dfe0e4 #d0d1d5',
        borderRadius: '3px',
      },
    };
  }

  renderBody() {
    switch (this.props.type) {
      case 'preview':
        return <StudentPreview {...this.props} />;
      case 'contact':
        return <StudentContact {...this.props} />;
      case 'parent':
        return <StudentParent {...this.props} />;
      default:
        return <StudentPreview {...this.props} />;
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        <StudentEdit {...this.props} />
        {this.renderBody()}
      </div>
    );
  }
}
