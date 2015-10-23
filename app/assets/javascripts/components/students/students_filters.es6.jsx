class StudentsFilters extends Component {

  get styles() {
    return {
      container: Object.assign(
        {},
        {
          display: 'flex',
          position: 'relative',
          padding: '0 24px',
          marginTop: '2%',
          boxSizing: 'border-box',
        },
        StyleConstants.cards.default
      ),
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
