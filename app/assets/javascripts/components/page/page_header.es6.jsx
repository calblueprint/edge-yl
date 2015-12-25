class PageHeader extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      action: React.PropTypes.string,
      clickable: React.PropTypes.bool,
      label: React.PropTypes.string.isRequired,
      value: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      action: null,
      clickable: false,
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
        <Clickable
          action={() => this.showOverlay()}
          content={'Edit'}
          type={'h3'} />
      </div>
    );
  }
}
