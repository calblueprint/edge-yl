class Dropdown extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      options: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
      styles: React.PropTypes.shape({
        child: React.PropTypes.shape({
          default: React.PropTypes.object,
          hover: React.PropTypes.object,
        }),
        container: React.PropTypes.object,
      }),
      blur: React.PropTypes.func,
    };
  }

  static get defaultProps() {
    return {
      options: [],
      styles: {
        child: {
          default: {},
          hover: {},
        },
        container: {},
      },
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      input: {
        width: '0px',
        height: '0px',
        border: '0px',
      },
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentDidMount() {
    var input = ReactDOM.findDOMNode(this.refs.input);
    // input.addEventListener('blur', (event) => this.props.blur(event));
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderOption(option, index) {
    var styles = Object.assign({}, this.props.styles.child);
    if (index > 0) {
      styles.default = Object.assign(
        {},
        styles.default,
        {
          borderTop: '1px solid',
          borderColor: StyleConstants.colors.gray
        }
      );
    }
    return (
      <Clickable
        content={option.content}
        action={option.func}
        key={index}
        route={option.route}
        styles={styles} />
    );
  }

  renderOptions() {
    return this.props.options.map((option, index) => this.renderOption(option, index));
  }

  render() {
    return (
      <div style={this.props.styles.container}>
        {this.renderOptions()}
        <input
          autoFocus={true}
          ref={'input'}
          style = {this.styles.input} />
      </div>
    );
  }
}
