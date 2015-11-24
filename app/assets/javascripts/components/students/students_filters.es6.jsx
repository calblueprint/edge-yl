class StudentsFilters extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      filters: React.PropTypes.arrayOf(React.PropTypes.array).isRequired,
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
  renderFilter(options, index) {
    return (
      <StudentsFilter
        key={index}
        options={options} />
    );
  }

  renderFilters() {
    return this.props.filters.map((options, index) => this.renderFilter(options, index));
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
