class StudentsFilters extends Component {

  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          display: 'flex',
          height: '22px',
          paddingLeft: '4px',
          marginTop: '2%',
          boxSizing: 'border-box',
        }
      ),
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <span> Student Filters </span>
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
