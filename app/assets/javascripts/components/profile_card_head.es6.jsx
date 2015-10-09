class ProfileCardHead extends React.Component {

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
        position: 'relative',
        height: 40,
        verticalAlign: 'middle',
        width: '100%',
      },
      cardName: {
        position: 'relative',
        float: 'left',
        lineHeight: '40px',
        marginLeft: 5,
        fontSize: 24,
      },
      icon: {
        position: 'relative',
        float: 'right',
        lineHeight: '40px',
        marginRight: 5,
      }
    };
  }
  
  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.cardName}>
          {this.props.cardName}
        </div>
        <i className={"fa fa-pencil-square-o fa-2x"} style={this.styles.icon}></i>
      </div>
    );
  }
}

