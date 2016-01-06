class HeaderNavigation extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      active: React.PropTypes.bool.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flex: '1',
        alignItems: 'center',
        alignSelf: 'stretch',
        padding: '0px 12px',
      },
      icon: {
        color: StyleConstants.colors.white,
        fontSize: '20px',
      },
    };
  }

  get clickableStyles() {
    return {
     default: {
        marginRight: '16px',
        color: StyleConstants.colors.white,
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderSearch() {
    if (this.props.active) {
      return (
        <HeaderSearch
          pagination={this.props.pagination}
          results={this.props.results}
          search={this.props.search} />
      );
    }
  }
  render() {
    return (
      <div style={this.styles.container}>
        <Clickable
          content={'EDGE'}
          route={RouteConstants.students.index()}
          styles={this.clickableStyles}
          type={'h2'}
          underline={false} />
        {this.renderSearch()}
      </div>
    );
  }
}
