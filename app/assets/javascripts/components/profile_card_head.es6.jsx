class ProfileCardHead extends React.Component {
  get styles() {
    return {
      container: {
        height: 40,
        verticalAlign: 'middle',
        textAlign: 'right',
        width: '100%',
        padding: 1
      },
      title: {
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
        <div style={this.styles.title}>
          CardName
        </div>
        <i className={"fa fa-pencil-square-o fa-2x"} style={this.styles.icon}></i>
      </div>
    )
  }
}

