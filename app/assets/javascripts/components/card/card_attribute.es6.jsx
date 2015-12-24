class CardAttribute extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      clickable: React.PropTypes.boolean,
      label: React.PropTypes.string.isRequired,
      route: React.PropTypes.string,
      type: React.PropTypes.string,
      type: React.PropTypes.oneOf(['h4', 'h5', 'h6']),
      value: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      clickable: false,
      route: '',
      type: 'h6',
      value: 'n/a',
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        justifyContent: 'space-between',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderLabel() {
    var label = this.props.label;
    switch (this.props.type) {
      case 'h4':
        return <h4>{label}</h4>;
      case 'h5':
        return <h5>{label}</h5>;
      case 'h6':
        return <h6>{label}</h6>;
    }
  }

  renderValue() {
    var value = this.props.value;
    if (this.props.clickable) {
      return (
        <Clickable
          content={value}
          route={this.props.route}
          type={this.props.type} />
      );
    } else {
      switch (this.props.type) {
        case 'h4':
          return <h4>{value}</h4>;
        case 'h5':
          return <h5>{value}</h5>;
        case 'h6':
          return <h6>{value}</h6>;
      }
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        {this.renderLabel()}
        {this.renderValue()}
      </div>
    );
  }
}
