class StudentsFilters extends Component {

  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          display: 'flex',
          padding: '12px',
          marginTop: '2%',
        }
      ),
      title: {
        flex: '1',
        alignItems: 'center',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.title}>
          <h5>{'Filters'}</h5>
        </div>
        <StudentsFilter
          filterList={['Warren', 'Anthony', 'Sonia']}
          isExpanded={false}
          selected={'Anthony'} />
        <StudentsFilter
          filterList={['UnzUnz', 'Max', 'Cat']}
          isExpanded={false}
          selected={'Max'} />
        <StudentsFilter
          filterList={['Lion', 'Tiger', 'Bear']}
          isExpanded={false}
          selected={'Bear'} />
      </div>
    );
  }
}
