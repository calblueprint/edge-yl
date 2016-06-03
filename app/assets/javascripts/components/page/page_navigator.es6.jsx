class PageNavigator extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      action: React.PropTypes.func.isRequired,
      pagination: React.PropTypes.shape({
        current: React.PropTypes.number.isRequired,
        limit: React.PropTypes.number.isRequired,
      }).isRequired,
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
        marginTop: '12px',
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

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderNext() {
    var pagination = this.props.pagination;
    if (pagination.current < pagination.limit) {
      var action = () => this.props.action(pagination.current + 1);
      var style = Object.assign({}, this.styles.section, this.styles.left);
      return (
        <div style={style}>
          <h6 style={this.styles.right}>{'|'}</h6>
          <Clickable
            action={action}
            content={'Next'}
            type={'h6'} />
        </div>
      );
    }
  }

  renderPrevious() {
    var pagination = this.props.pagination;
    if (pagination.current > 1) {
      var action = () => this.props.action(pagination.current - 1);
      var style = Object.assign({}, this.styles.section, this.styles.right);
      return (
        <div style={style}>
          <Clickable
            action={action}
            content={'Previous'}
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
          {`Displaying page ${pagination.current} of ${pagination.limit || 1} total`}
        </h6>
        {this.renderNext()}
      </div>
    );
  }
}
