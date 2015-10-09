class ProfileCardHead extends React.Component {

  static get propTypes() {
    return {
      cardName: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      cardName: '',
    }
  }

  get styles() {
    return {
      container: {
        height: 40,
        verticalAlign: 'middle',
        textAlign: 'right',
        width: '100%',
        padding: 1
      },
      cardName: {
        float: 'left',
        lineHeight: '40px',
        fontSize: '24px',
        marginLeft: '5px',
      },
      icon: {
        float: 'right',
        lineHeight: '40px',
        marginRight: '5px'
      }
    };
  }
  
  render () {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.cardName}>
          {this.props.cardName}
        </div>
        <i className={"fa fa-pencil-square-o fa-2x"} style={this.styles.icon}></i>
      </div>
    )
  }
}

