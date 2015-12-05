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
          height: '40px',
          marginTop: '12px',
          boxSizing: 'border-box',
        }
      ),
      placeholder: {
        width: '0px',
        height: '40px',
      },
      section: {
        display: 'flex',
        flex: '1',
        padding: '12px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderFilter(filter) {
    return (
      <StudentsFilter
        key={filter.key}
        filter={filter} />
    );
  }

  renderFilters() {
    return this.props.filters.map((filter) => this.renderFilter(filter));
  }

  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.section}>
          <h5>{'Filters'}</h5>
          {this.renderFilters()}
        </div>
        <div styl={this.styles.placeholder} />
      </div>
    );
  }
}
