class PageNavigator extends Component {

  static get propTypes() {
    return {
      limit: React.PropTypes.number.isRequired,
      page: React.PropTypes.number.isRequired,
      route: React.PropTypes.func.isRequired,
    };
  }

  static get defaultProps() {
    return {
      limit: 1,
      page: 1,
      route: null,
    };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '24px 0',
      },
      label: {
        padding: '0px 12px',
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

  renderPrevious() {
    var props = this.props;
    if (props.page > 1) {
      return (
        <Clickable
          content={'Previous'}
          func={() => window.location = props.route(props.page - 1)}
          styles={this.clickableStyles}
          type={'h6'} />
      );
    }
  }

  renderNext() {
    var props = this.props;
    if (props.page < props.limit) {
      return (
        <Clickable
          content={'Next'}
          func={() => window.location = props.route(props.page + 1)}
          styles={this.clickableStyles}
          type={'h6'} />
      );
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        {this.renderPrevious()}
        <h6 style={this.styles.label}>
          {'Displaying 10 out of 25 students'}
        </h6>
        {this.renderNext()}
      </div>
    );
  }
}
