class PageNavigator extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      pagination: React.PropTypes.shape({
        current: React.PropTypes.number.isRequired,
        limit: React.PropTypes.number.isRequired,
      }).isRequired,
      route: React.PropTypes.func.isRequired,
    };
  }

  static get defaultProps() {
    return {
      pagination: {
        current: 1,
        limit: 1,
      },
      route: null,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '24px 0',
      },
      left: {
        paddingLeft: '6px',
      },
      right: {
        paddingRight: '6px',
      },
      section: {
        display: 'flex',
      },
    };
  }

  get clickableStyles() {
    return {
      hover: {
        textDecoration: 'underline',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderNext() {
    var pagination = this.props.pagination;
    var style = Object.assign({}, this.styles.section, this.styles.left);
    if (pagination.current < pagination.limit) {
      return (
        <div style={style}>
          <h6 style={this.styles.right}>{'|'}</h6>
          <Clickable
            content={'Next'}
            action={() => window.location = this.props.route(pagination.current + 1)}
            styles={this.clickableStyles}
            type={'h6'} />
        </div>
      );
    }
  }

  renderPrevious() {
    var pagination = this.props.pagination;
    var style = Object.assign({}, this.styles.section, this.styles.right);
    if (pagination.current > 1) {
      return (
        <div style={style}>
          <Clickable
            content={'Previous'}
            action={() => window.location = this.props.route(pagination.current - 1)}
            styles={this.clickableStyles}
            type={'h6'} />
          <h6 style={this.styles.left}>{'|'}</h6>
        </div>
      );
    }
  }

  render() {
    var pagination = this.props.pagination;
    return (
      <div style={this.styles.container}>
        {this.renderPrevious()}
        <h6>
          {`Displaying page ${pagination.current} of ${pagination.limit} total`}
        </h6>
        {this.renderNext()}
      </div>
    );
  }
}
