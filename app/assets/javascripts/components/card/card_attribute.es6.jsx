class CardAttribute extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      label: React.PropTypes.string.isRequired,
      value: React.PropTypes.string.isRequired,
    };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        justifyContent: 'space-between',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <h6>{this.props.label}</h6>
        <h6>{this.props.value}</h6>
      </div>
    );
  }
}
