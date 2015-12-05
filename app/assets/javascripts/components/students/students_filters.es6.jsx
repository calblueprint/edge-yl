class StudentsFilters extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      filters: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    };
  }

  static get defaultProps() {
    return {
      filters: [],
    };
  }

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
  renderFilter(filter, index) {
    return (
      <StudentsFilter
        key={index}
        filter={filter} />
    );
  }

  renderFilters() {
    return this.props.filters.map((filter, index) => this.renderFilter(filter, index));
  }

  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.title}>
          <h5>{'Filters'}</h5>
        </div>
        {this.renderFilters()}
      </div>
    );
  }
}
