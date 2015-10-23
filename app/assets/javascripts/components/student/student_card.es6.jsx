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
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          display: 'flex',
          flexFlow: 'column',
          position: 'relative',
          width: '32.5%',
          height: '312px',
          marginTop: '1%',
        }
      ),
    };
  }

  renderBody() {
    switch (this.props.type) {
      case 'preview':
        return <StudentPreview {...this.props} />;
      case 'contact':
        return <StudentContact {...this.props} />;
      case 'conference':
        return <StudentConference {...this.props} />;
      default:
        return <StudentPreview {...this.props} />;
    };
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
