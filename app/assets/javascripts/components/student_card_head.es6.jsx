class StudentCardHead extends React.Component {

  static get propTypes() {
    return {
      cardName: React.PropTypes.string.isRequired,
    };
  }

  static get defaultProps() {
    return {
      cardName: '',
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
  
  render() {
    return (
      <div style={this.styles.container}>
        <span>{this.props.cardName}</span>
        <i className={"fa fa-pencil-square-o"} style={this.styles.icon}></i>
      </div>
    );
  }
}

