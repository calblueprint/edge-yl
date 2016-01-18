class StudentsFilters extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      filters: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.containers.card,
        {
          flexFlow: 'column',
          marginTop: '12px',
        }
      ),
      title: {
        padding: '12px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderFilter(filter) {
    return (
      <span>{'Blah'}</span>
    );
  }

  renderFilters() {
    return this.props.filters.map((filter) => this.renderFilter(filter));
  }

  render() {
    return (
      <div style={this.styles.container}>
        <h5 style={this.styles.title}>{'Filters'}</h5>
        {this.renderFilters()}
      </div>
    );
  }
}
