class StudentEdit extends Component {

  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
      type: React.PropTypes.oneOf([
        'contact',
        'conference',
        'parent',
        'preview',
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
        justifyContent: 'center',
        alignItems: 'center',
        height: '40px',
        borderBottom: 'solid #D6D6D6 1px',
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        display: 'inline',
        position: 'absolute',
        top: '0px',
        right: '8px',
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
      case 'conference':
        return 'Conference Information';
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <h5>{this.renderTitle()}</h5>
        <Clickable
          func={(event) => this.props.renderOverlay(this.props.type)}
          icon={'fa fa-pencil-square-o fa-lg'}
          styles={this.clickableStyles}
          type={'i'} />
      </div>
    );
  }
}

