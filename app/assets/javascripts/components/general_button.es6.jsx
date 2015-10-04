class GeneralButton extends React.Component {

  static get propTypes() {
    return {
      action: React.PropTypes.func,
      route: React.PropTypes.string,
      content: React.PropTypes.string.isRequired,
    };
  }

  static get defaultProps() {
    return {
      action: null,
      route: '',
      content: '',
    };
  }

  get styles() {
    
  }
  
  handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.props.route !== '') {
      // Route
    } else if (this.props.action !== null) {
      this.props.action();
    }
  }

  render () {
    return (
      <a
        href={this.props.route}
        onClick={this.handleClick.bind(this)}>
        {this.props.content}
      </a>
    );
  }
}

