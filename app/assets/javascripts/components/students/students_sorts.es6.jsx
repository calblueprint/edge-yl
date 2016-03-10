class StudentsSorts extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
      sorts: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
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
  renderSort(sort) {
    return (
      <StudentsSort
        conference={this.props.conference}
        key={sort.key}
        sort={sort} />
    );
  }

  renderSorts() {
    return this.props.sorts.map((sort) => this.renderSort(sort));
  }

  render() {
    return (
      <div style={this.styles.container}>
        <h5 style={this.styles.title}>{'Sorts'}</h5>
        {this.renderSorts()}
      </div>
    );
  }
}
