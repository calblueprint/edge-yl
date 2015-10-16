class StudentCard extends Component {

  static get propTypes() {
    return {
      cardName: React.PropTypes.string.isRequired,
      cardBody: React.PropTypes.string.isRequired,
    };
  }

  static get defaultProps() {
    return {
      cardName: '',
      cardBody: '',
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
        padding: '0',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <StudentCardHead cardName={this.props.cardName} />
        <StudentCardBody cardBody={this.props.cardBody} />
      </div>
    );
  }
}
