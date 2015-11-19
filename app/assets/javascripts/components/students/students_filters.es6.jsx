class StudentsFilters extends Component {

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          display: 'flex',
          padding: '10px',
          marginTop: '12px',
          alignItems: 'center',
        }
      ),
      title: {
        padding: '0px 16px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.title}>
          <h5>{'Filters'}</h5>
        </div>
        <StudentsFilter
          options={['Warren', 'Anthony', 'Sonia']} />
        <StudentsFilter
          options={['UnzUnz', 'Max', 'Cat']} />
        <StudentsFilter
          options={['Lion', 'Tiger', 'Bear']} />
      </div>
    );
  }
}
