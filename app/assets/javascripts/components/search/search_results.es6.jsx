class SearchResults extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      pagination: React.PropTypes.object.isRequired,
      results: React.PropTypes.array.isRequired,
      search: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        {
          display: 'flex',
          flexFlow: 'column',
          position: 'absolute',
          width: '100%',
          marginTop: '16px',
          zIndex: StyleConstants.planes.nine,
        },
        (!this.props.search.active ||
         !this.props.results.length) &&
         { display: 'none' },
      ),
    };
  }

  get dropdownStyles() {
    return {
      child: {
        default: {
          flex: '1',
          padding: '12px 0px',
          paddingLeft: '0px',
          margin: '0px 12px',
          transition: 'padding 0.25s ease-out',
        },
        hover: {
          paddingLeft: '4px',
        },
      },
      container: StyleConstants.containers.card,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateChoice(result) {
    var route;
    var type = result.searchable_type;
    var node = <SearchResult label={type} value={result.content} />;
    if (type === 'Group') {
      route = RouteConstants.groups.show(result.searchable_id);
    } else if (type === 'School') {
      route = RouteConstants.schools.show(result.searchable_id);
    } else {
      route = RouteConstants.students.show(result.searchable_id);
    }
    return {
      children: node,
      route: route,
    };
  }

  generateChoices() {
    var results = this.props.results;
    var choices = results.map((result) => this.generateChoice(result));
    var pagination = this.props.pagination;
    var footer = {
      content: `Displaying page ${pagination.current} of ${pagination.limit} total`,
      static: true,
    };
    choices.push(footer);
    return choices;
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.container}>
        <DropdownChoices
          choices={this.generateChoices()}
          styles={this.dropdownStyles} />
      </div>
    );
  }
}
