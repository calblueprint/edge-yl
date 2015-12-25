class PageHeader extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      action: React.PropTypes.func,
      clickable: React.PropTypes.bool,
      content: React.PropTypes.string,
      label: React.PropTypes.string.isRequired,
      value: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      action: null,
      clickable: false,
      content: '',
      value: '',
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: '12px',
      },
      section: {
        display: 'flex',
        flexFlow: 'column',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderClickable() {
    if (this.props.clickable) {
      return (
        <Clickable
          action={() => this.props.action()}
          content={this.props.content}
          type={'h4'} />
      );
    }
  }

  renderValue() {
    if (this.props.value) {
      return <h3>{this.props.value}</h3>;
    }
  }

  render() {
    return (
      <div style={this.styles.header}>
        <div style={this.styles.section}>
          <h4>{this.props.label}</h4>
          {this.renderValue()}
        </div>
        {this.renderClickable()}
      </div>
    );
  }
}
