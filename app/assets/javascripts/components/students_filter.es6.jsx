class StudentsFilter extends Component {

  static get propTypes() {
    return {
      isExpanded: React.PropTypes.bool.isRequired,
      filterList: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
      selected: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      isExpanded: false,
      filterList: [],
      selected: 'None',
    };
  }

  handleExpand() {
    this.setState({ isExpanded: !this.state.isExpanded });
  }

  generateSelectHandler(item) {
    return function() {
      this.setState({ selected: item });
    }.bind(this);
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flex: '1',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '22px',
        border: '1px solid',
        borderColor: '#e5e6e9 #dfe0e4 #d0d1d5',
        overflow: 'hidden',
      },
      expanded: {
        height: '100px',
        overflow: 'scroll',
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        height: '22px',
      },
    };
  }

  renderListItem(item) {
    return (
      <Clickable
        func={this.generateSelectHandler(item)}
        key={this.props.filterList.indexOf(item)}
        styles={this.clickableStyles}>
        <div>{item}</div>
      </Clickable>
    );
  }

  renderListItems() {
    return this.props.filterList.map(this.renderListItem.bind(this));
  }

  render() {
    var style = Object.assign(
      {},
      this.styles.container,
      this.state.isExpanded && this.styles.expanded
    );
    return (
      <div style={style}>
        <Clickable
          func={this.handleExpand.bind(this)}
          styles={this.clickableStyles}>
          <span>{this.state.selected || this.props.selected}</span>
          <i className={"fa fa-angle-down"}></i>
        </Clickable>
        <div style={style}>
          {this.renderListItems()}
        </div>
      </div>
    );
  }
}
