class StudentsGrid extends Component {

  get styles() {
    return {
      container: {
        display: 'flex',
        position: 'relative',
        marginTop: '2%',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        {'StudentsGrid'}
      </div>
    );
  }
}
