class Dropdown extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      action: React.PropTypes.func,
      options: React.PropTypes.arrayOf(React.PropTypes.shape({
        action: React.PropTypes.func,
        children: React.PropTypes.node,
        content: React.PropTypes.string,
        route: React.PropTypes.string,
        static: React.PropTypes.boolean,
      })).isRequired,
      styles: React.PropTypes.shape({
        child: React.PropTypes.shape({
          default: React.PropTypes.object,
          hover: React.PropTypes.object,
        }),
        container: React.PropTypes.object,
      }),
    };
  }

  static get defaultProps() {
    return {
      action: null,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      input: {
        position: 'absolute',
        top: '0px',
        left: '0px',
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
    input.addEventListener('blur', () => this.handleBlur());
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleBlur() {
    if (this.props.action) {
      this.props.action();
    }
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
        { borderTop: `1px solid ${StyleConstants.colors.gray}` }
      );
    }
    if (option.static) {
      styles.default = Object.assign(
        {},
        styles.default,
        {
          textAlign: 'right',
        }
      );
      styles.hover = {};
    }
    if (option.children) {
      return (
        <Clickable
          action={option.action}
          key={index}
          route={option.route}
          styles={styles}
          type={'div'}>
          {option.children}
        </Clickable>
      );
    } else {
      return (
        <Clickable
          action={option.action}
          content={option.content}
          key={index}
          route={option.route}
          styles={styles}
          type={'span'} />
      );
    }
  }

  renderOptions() {
    var options = this.props.options;
    return options.map((option, index) => this.renderOption(option, index));
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
