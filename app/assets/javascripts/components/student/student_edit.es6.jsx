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
      icon: {
        position: 'absolute',
        top: '0px',
        right: '8px',
        lineHeight: '40px',
        cursor: 'pointer',
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        position: 'absolute',
        top: '0px',
        right: '8px',
        lineHeight: '40px',
        cursor: 'pointer',
      }
    }
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

  editCard() {
    this.props.renderOverlay()
  }

  render() {
    return (
      <div style={this.styles.container}>
        <h5>{this.renderTitle()}</h5>
        <Clickable
          func={this.editCard.bind(this)}
          icon={'fa fa-pencil-square-o'}
          styles={this.clickableStyles}
          type={'i'} />
      </div>
    );
  }
}

