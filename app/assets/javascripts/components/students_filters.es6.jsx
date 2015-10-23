class StudentsFilters extends Component {

  get styles() {
    return {
      container: {
        display: 'flex',
        position: 'relative',
        height: '74px',
        padding: '24px',
        marginTop: '2%',
        backgroundColor: 'white',
        border: '1px solid',
        borderColor: '#e5e6e9 #dfe0e4 #d0d1d5',
        borderRadius: '3px',
        boxSizing: 'border-box',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <StudentsFilter
          filterList={['Warren', 'Anthony', 'Sonia']}
          isExpanded={false}
          selected={'Anthony'} />
        <StudentsFilter
          filterList={['UnzUnz', 'Max', 'Cat']}
          isExpanded={false}
          selected={'Max'} />
      </div>
    );
  }
}