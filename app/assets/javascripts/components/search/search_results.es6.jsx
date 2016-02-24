class SearchResults extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      choices: React.PropTypes.array.isRequired,
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
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.container}>
        <DropdownChoices
          choices={this.props.choices}
          styles={this.dropdownStyles} />
      </div>
    );
  }
}
