class StudentEdit extends Component {

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
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        height: '40px',
        borderBottom: 'solid #D6D6D6 1px',
      },
      icon: {
        position: 'absolute',
        top: '0px',
        right: '6px',
        lineHeight: '40px',
      },
    };
  }

  renderTitle() {
    switch (this.props.type) {
      case 'preview':
        return 'Student Preview';
      case 'contact':
        return 'Student Information';
      case 'parent':
        return 'Parent Information';
      default:
        return 'Student Preview';
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <span>{this.renderTitle()}</span>
        <i
          className={"fa fa-pencil-square-o"}
          style={this.styles.icon}>
        </i>
      </div>
    );
  }
}

