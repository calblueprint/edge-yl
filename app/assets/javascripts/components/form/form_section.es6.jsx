class FormSection extends Component {

// TODO(Sonia): Add a 'required' proptype
  static get propTypes() {
    return {
      title: React.PropTypes.string.isRequired,
      updateValue: React.PropTypes.func.isRequired,
    };
  }

  static get defaultProps() {
    return {};
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
      },
      header: {
        display: 'flex',
        flexFlow: 'row',
        alignItems: 'center',
      },
      title: {
        fontSize: StyleConstants.fonts.sizes.medium,
      },
      line: {
        flex: '1',
        height: '1px',
        marginLeft: '10px',
        borderTop: 'solid gray 1px',
      },
      questions: {
        padding: '24px',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.header}>
          <span style={this.styles.title}>{this.props.title}</span>
          <span style={this.styles.line} />
        </div>
        <div style={this.styles.questions}>
          <FormField
            title={'First Name'}
            placeholder={'Emily'}
            func={this.props.updateValue} />
          <FormField
            title={'Last Name'}
            placeholder={'Wilson'} 
            func={this.props.updateValue} />
        </div>
      </div>
    );
  }
}
