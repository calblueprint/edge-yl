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

  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        flex: '1',
        height: '22px',
        overflow: 'hidden',
        zIndex: '100',
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

  handleExpand() {
    this.setState({ isExpanded: !this.state.isExpanded });
  }

  generateSelectHandler(item) {
    return function() {
      this.setState({ selected: item });
    }.bind(this);
  }

  renderListItem(item, index) {
    return (
      <Clickable
        func={this.generateSelectHandler(item)}
        key={index}
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
