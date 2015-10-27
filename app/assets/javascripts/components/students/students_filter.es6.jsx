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
      container: Object.assign(
        {},
        {
          display: 'flex',
          flexFlow: 'column',
          justifyContent: 'center',
          flex: '1',
          height: '22px',
          paddingLeft: '4px',
          overflow: 'hidden',
          zIndex: StyleConstants.planes.seven,
        }
      ),
      expanded: {
        height: '100px',
        overflow: 'scroll',
        backgroundColor: StyleConstants.colors.white,
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
        content={item}
        func={this.generateSelectHandler(item)}
        key={index}
        styles={this.clickableStyles} />
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
          icon={'fa fa-angle-down'}
          styles={this.clickableStyles}
          type={'i'}>
          <span>{this.state.selected || this.props.selected}</span>
        </Clickable>
        <div style={style}>
          {this.renderListItems()}
        </div>
      </div>
    );
  }
}
